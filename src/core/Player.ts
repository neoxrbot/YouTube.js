import type { FetchFunction, ICache } from '../types/index.js';
import { Constants, BinarySerializer, Log } from '../utils/index.js';

import {
  getRandomUserAgent,
  getStringBetweenStrings,
  Platform,
  PlayerError
} from '../utils/Utils.js';

import { JsExtractor, JsAnalyzer } from '../utils/index.js';
import { nMatcher, sigMatcher, timestampMatcher } from '../utils/javascript/matchers.js';

import type { ExtractionConfig } from '../utils/javascript/JsAnalyzer.js';
import type { BuildScriptResult } from '../utils/javascript/JsExtractor.js';

import packageInfo from '../../package.json' with { type: 'json' };

const TAG = 'Player';

function fingerprintScript(output?: string | null) {
  const text = output || '';
  let hash = 2166136261;

  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return {
    length: text.length,
    hash: (hash >>> 0).toString(16).padStart(8, '0')
  };
}

interface SerializablePlayer {
  playerId: string;
  signatureTimestamp: number;
  libraryVersion: string;
  data?: BuildScriptResult;
}

interface PlayerInitializationOptions {
  cache?: ICache;
  signature_timestamp: number;
  data: BuildScriptResult;
}

/**
 * Represents YouTube's player script. This is required to decipher signatures.
 */
export default class Player {
  public po_token?: string;

  constructor(public player_id: string, public signature_timestamp: number, public data?: BuildScriptResult) { /** no-op */ }

  public static async create(
    cache: ICache | undefined,
    fetch: FetchFunction = Platform.shim.fetch,
    po_token?: string, player_id?: string
  ): Promise<Player> {
    if (!player_id) {
      const url = new URL('/iframe_api', Constants.URLS.YT_BASE);
      const res = await fetch(url);

      if (!res.ok)
        throw new PlayerError(`Failed to get player id: ${res.status} (${res.statusText})`);

      const js = await res.text();

      player_id = getStringBetweenStrings(js, 'player\\/', '\\/');
    }

    Log.info(TAG, `Using player id (${player_id}). Checking for cached players..`);

    if (!player_id)
      throw new PlayerError('Failed to get player id');

    // We have the player id, now we can check if we have a cached player.
    if (cache) {
      const cached_player = await Player.fromCache(cache, player_id);
      if (cached_player) {
        Log.info(TAG, 'Found up-to-date player data in cache.');
        cached_player.po_token = po_token;
        return cached_player;
      }
    }

    const player_url = new URL(`/s/player/${player_id}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE);

    Log.info(TAG, `Could not find any cached player. Will download a new player from ${player_url}.`);

    const player_res = await fetch(player_url, {
      headers: {
        'user-agent': getRandomUserAgent('desktop')
      }
    });

    if (!player_res.ok) {
      throw new PlayerError(`Failed to get player data: ${player_res.status}`);
    }

    const player_js = await player_res.text();

    const sigFunctionName = 'sigFunction';
    const nFunctionName = 'nFunction';
    const timestampVarName = 'signatureTimestampVar';

    const extractions: ExtractionConfig[] = [
      { friendlyName: sigFunctionName, match: sigMatcher },
      { friendlyName: nFunctionName, match: nMatcher, stopWhenReady: false },
      { friendlyName: timestampVarName, match: timestampMatcher, collectDependencies: false }
    ];

    const jsAnalyzer = new JsAnalyzer(player_js, { extractions });
    const jsExtractor = new JsExtractor(jsAnalyzer);

    const result = jsExtractor.buildScript({
      exportRawValues: true,
      rawValueOnly: [ timestampVarName ]
    });

    Log.debug(TAG, 'Player extraction summary:', {
      player_id,
      exports: result.exported,
      has_signature_timestamp: Boolean(result.exportedRawValues?.[timestampVarName]),
      script_fingerprint: fingerprintScript(result.output)
    });

    if (result.exportedRawValues && !(timestampVarName in result.exportedRawValues)) {
      Log.warn(TAG, 'Failed to extract signature timestamp.');
    }

    if (!result.exported.includes(sigFunctionName)) {
      Log.warn(TAG, 'Failed to extract signature decipher function.');
    }

    if (!result.exported.includes(nFunctionName)) {
      Log.warn(TAG, 'Failed to extract n decipher function.');
    }

    const signatureTimestamp = result.exportedRawValues?.[timestampVarName];

    const player = await Player.fromSource(player_id, {
      cache,
      signature_timestamp: parseInt(signatureTimestamp) || 0,
      data: result
    });

    player.po_token = po_token;

    return player;
  }

  async decipher(url?: string, signature_cipher?: string, cipher?: string, this_response_nsig_cache?: Map<string, string>): Promise<string> {
    url = url || signature_cipher || cipher;

    if (!url)
      throw new PlayerError('No valid URL to decipher');

    const args = new URLSearchParams(url);
    const url_components = new URL(args.get('url') || url);

    const n = url_components.searchParams.get('n');
    const s = args.get('s');
    const sp = args.get('sp');

    if (this.data && ((signature_cipher || cipher) || n)) {
      const eval_args: { sig?: string | null; n?: string | null } = {};

      if (signature_cipher || cipher) {
        eval_args.sig = s;
      }

        if (n) {
          if (this_response_nsig_cache?.has(n)) {
            const nsig = this_response_nsig_cache.get(n) as string;
            url_components.searchParams.set('n', nsig);
          } else {
            eval_args.n = url_components.toString();
          }
        }

      if (Object.keys(eval_args).length > 0) {
        const result = await Platform.shim.eval(this.data, eval_args) as Record<string, unknown>;

        if (typeof result !== 'object' || result === null) {
          throw new PlayerError('Got invalid result from player script evaluation.');
        }

        if (typeof eval_args.sig === 'string') {
          const signatureResult = result.sig;

          Log.info(TAG, `Transformed signature from ${s} to ${signatureResult}.`);

          if (typeof signatureResult !== 'string')
            throw new PlayerError('Got invalid signature from player script evaluation.');

          if (sp) {
            url_components.searchParams.set(sp, signatureResult);
          } else {
            url_components.searchParams.set('signature', signatureResult);
          }
        }

        if (typeof eval_args.n === 'string') {
          const rawNResult = result.n;
          const nResult = (() => {
            if (typeof rawNResult === 'string')
              return rawNResult;

            if (
              typeof rawNResult === 'object' &&
              rawNResult !== null &&
              'n' in rawNResult &&
              typeof rawNResult.n === 'string'
            ) {
              return rawNResult.n;
            }

            if (typeof rawNResult === 'object' && rawNResult !== null) {
              const valueOfResult = typeof rawNResult.valueOf === 'function' ? rawNResult.valueOf() : rawNResult;
              if (typeof valueOfResult === 'string')
                return valueOfResult;

              const stringified = typeof rawNResult.toString === 'function' ? rawNResult.toString() : '';
              if (typeof stringified === 'string' && stringified && stringified !== '[object Object]')
                return stringified;
            }

            return rawNResult;
          })();

          Log.info(TAG, `Transformed n from ${n} to ${typeof nResult === 'string' ? nResult : rawNResult}.`);

          if (typeof nResult !== 'string') {
            Log.warn(TAG, 'n decipher returned a non-string result.', {
              n,
              result_type: typeof rawNResult,
              result_keys: Object.keys(result),
              nested_result_keys: typeof rawNResult === 'object' && rawNResult !== null ? Object.keys(rawNResult) : [],
              has_n_function: this.data?.exported.includes('nFunction')
            });
            Log.warn(TAG, `Proceeding with original n value (n=${n}).`);
          } else {
            if (nResult.startsWith('enhanced_except_')) {
              Log.warn(TAG, `Decipher script returned an error (n=${n}):`, nResult);
            } else if (this_response_nsig_cache) {
              this_response_nsig_cache.set(n as string, nResult);
            }

            url_components.searchParams.set('n', nResult);
          }
        }
      }
    }

    // @NOTE: SABR requests should include the PoToken (not base64d, but as bytes!) in the payload.
    if (url_components.searchParams.get('sabr') !== '1' && this.po_token)
      url_components.searchParams.set('pot', this.po_token);

    const client = url_components.searchParams.get('c');

    switch (client) {
      case 'WEB':
        url_components.searchParams.set('cver', Constants.CLIENTS.WEB.VERSION);
        break;
      case 'MWEB':
        url_components.searchParams.set('cver', Constants.CLIENTS.MWEB.VERSION);
        break;
      case 'WEB_REMIX':
        url_components.searchParams.set('cver', Constants.CLIENTS.YTMUSIC.VERSION);
        break;
      case 'WEB_KIDS':
        url_components.searchParams.set('cver', Constants.CLIENTS.WEB_KIDS.VERSION);
        break;
      case 'TVHTML5':
        url_components.searchParams.set('cver', Constants.CLIENTS.TV.VERSION);
        break;
      case 'TVHTML5_SIMPLY':
        url_components.searchParams.set('cver', Constants.CLIENTS.TV_SIMPLY.VERSION);
        break;
      case 'TVHTML5_SIMPLY_EMBEDDED_PLAYER':
        url_components.searchParams.set('cver', Constants.CLIENTS.TV_EMBEDDED.VERSION);
        break;
      case 'WEB_EMBEDDED_PLAYER':
        url_components.searchParams.set('cver', Constants.CLIENTS.WEB_EMBEDDED.VERSION);
        break;
    }

    const result = url_components.toString();

    Log.info(TAG, `Deciphered URL: ${result}`);

    return url_components.toString();
  }

  static async fromCache(cache: ICache, player_id: string): Promise<Player | null> {
    const buffer = await cache.get(player_id);

    if (!buffer)
      return null;

    try {
      const deserializedCache = BinarySerializer.deserialize<SerializablePlayer>(new Uint8Array(buffer));

      if (deserializedCache.libraryVersion !== packageInfo.version) {
        Log.warn(TAG, `Cached player data is from a different library version (${deserializedCache.libraryVersion}). Ignoring it.`);
        return null;
      }

      return new Player(deserializedCache.playerId, deserializedCache.signatureTimestamp, deserializedCache.data);
    } catch (e) {
      Log.error(TAG, 'Failed to deserialize player data from cache:', e);
      return null;
    }
  }

  static async fromSource(player_id: string, options: PlayerInitializationOptions): Promise<Player> {
    const player = new Player(player_id, options.signature_timestamp, options.data);
    await player.cache(options.cache);
    return player;
  }

  async cache(cache?: ICache): Promise<void> {
    if (!cache || !this.data)
      return;

    const buffer = BinarySerializer.serialize({
      playerId: this.player_id,
      signatureTimestamp: this.signature_timestamp,
      libraryVersion: packageInfo.version,
      data: this.data
    });

    await cache.set(this.player_id, buffer);
  }

  get url(): string {
    return new URL(`/s/player/${this.player_id}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE).toString();
  }

  static get LIBRARY_VERSION(): number {
    return 15;
  }
}
