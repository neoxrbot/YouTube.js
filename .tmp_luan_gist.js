const window = Object.assign({}, globalThis);
const document = {};
const self = window;

const exportedVars = (function(g) {
  var O, hg, qQ, XV, E6s, qh, o0, ij, $_, IW, ils, St, $kB, m5t, Xv, OF, pO, Dp, lnT, Ag, VKU, Vm, XF, G2r, rU, Ubo, ny, T5t, $mr, xQ, UKh, YSB, CXi, ga9, sV5, i8F, FVF, w0B, tHi, ZaU, FhK, $6, fos, hVQ, wF, dF, $F9, OH, bD, JW, iCU, yO, Ba, Smv, GB, A_, CB;

  //#region --- start [nFunction] ---
  O = "assign;url;1970-01-01T05:15:35.000+05:15;U;h9;N;slice;push;set;length;indexOf;Z;match;call;W;;rr;/;path;://;file;([,)(;split;https://local;local;s;scheme;cmo=pf;splice;get;pop;1970-01-01T02:45:23.000+02:45;Zy;/videoplayback;A_;Untrusted URL;fromCharCode;eH;&;r;fallback_count;/initplayback;unshift;replace;,;cmo=td;forEach;index.m3u8;nt;www.youtube.com;startsWith;C;join;toString;if;1970-01-01T03:47:45.000+03:45;Ap;/file/index.m3u8;1;n;undefined;signatureCipher;/api/manifest;clone;1970-01-01T07:15:28.000+07:15;cmo;//;\\.googlevideo\\.com$;mn;youtube.player.web_20260303_11_RC00;true;redirector.googlevideo.com;=;sp;1969-12-31T18:00:06.000-06:00;_HjwIa5;1970-01-01T05:30:06.000+05:30;playerfallback;\\.a1\\.googlevideo\\.com$;reverse;1970-01-01T05:15:05.000+05:15;ZX;%3D;fvip;0LR3IEsTpf4o6AB3N_-_w8_;1969-12-31T19:00:34.000-05:00;throw;a1.googlevideo.com;http://local;1970-01-01T06:31:05.000+06:30;rr?[1-9].*\\.c\\.youtube\\.com$".split(";");
  g.oa = class extends Error{constructor(r,...p){super(r);this.args=[...p];Object.setPrototypeOf(this,new.target.prototype)}};
  E6s = RegExp("^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,z])?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(lh7\\-(eu|us|qw|rt)\\.((googleusercontent)|(google)))|((photos|testonly|work)\\.fife\\.usercontent\\.google)|([\\w\\-]+\\.fife\\.usercontent\\.google)|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz0\\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(drive\\.google\\.com\\/drive\\-(usercontent|viewer))|(dp[3-6]\\.googleusercontent\\.cn)|(dp4\\.googleusercontent\\.com)|((photos|drive|contribution)\\-image\\-(dev|qa)(-us|-eu)?(-auth|-cookie)?\\.corp\\.google\\.com)|(photos\\-image\\-dev\\-dl\\-(auth|eu|us)\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?)|(drive\\-qa\\.corp\\.google\\.com\\/drive\\-(usercontent|viewer))|(docs(\\-(dev|qa)\\.corp)?\\.google\\.com\\/(u\\/[0-9]+\\/)?(docs|sheets|slides|drawings|forms|videos|pictures)\\-images\\-(rt|qw))|(docs\\.sandbox\\.google\\.com\\/(u\\/[0-9]+\\/)?(docs|sheets|slides|drawings|forms|videos|pictures)\\-images))\\/|^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https?://(([A-Za-z0-9-]{1,63}\\.)*(corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|docs\\.google\\.com|drive\\.google\\.com|googleplex\\.com|googlevideo\\.com|prod\\.google\\.com|lh3\\.photos\\.google\\.com|currents\\.google\\.com|mail\\.google\\.com|youtube\\.com|yt\\.akamaized\\.net|chat\\.google\\.com)[.]?(:[0-9]+)?/|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$)|([A-Za-z0-9-]{1,63}\\.)*c\\.lh3(-d[a-gyz]|-testonly)?\\.(googleusercontent|photos\\.google)\\.com/.*$)");
  qh = function(r,p){return p&&p.test(r)?!0:!1};
  g.Y = function(r,p="ERROR"){var I={};I.name=g.h("INNERTUBE_CONTEXT_CLIENT_NAME",1);I.version=g.h("INNERTUBE_CONTEXT_CLIENT_VERSION");AQs(r,I,p)};
  g.Qb = function(r){g.Y(r,"WARNING")};
  o0 = function(r,p,I=!1,S=""){!r&&I&&g.Qb(Error(`Player URL validator detects invalid url. ${S}: ${p}`));return r};
  XV = function(r){return o0(qh(r,E6s),r,!1,"Trusted Stream URL")};
  ij = function(r,p){this.U=this.W=null;this.Z=r||null;this.N=!!p};
 
  // Added manually:
  g.q = ij.prototype;

	g.q.toString = function() {
		if (this.Z) return this.Z;
		if (!this.W) return "";
		const r = [],
			p = Array.from(this.W.keys());
		for (let S = 0; S < p.length; S++) {
			var I = p[S];
			const a = g.ao(I);
			I = this.Qy(I);
			for (let B = 0; B < I.length; B++) {
				let N = a;
				I[B] !== "" && (N += "=" + g.ao(I[B]));
				r.push(N)
			}
		}
		return this.Z = r.join("&")
	};

  // ends here

  $_ = function(r,p){return r?p?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""};
  g.RR = function(r,p,I){r.C=I?$_(p,!0):p;r.C&&(r.C=r.C.replace(/:$/,""))};
  g.rb = function(r,p,I){r.W=I?$_(p,!0):p};
  g.p6 = function(r,p){if(p){p=Number(p);if(isNaN(p)||p<0)throw Error("Bad port number "+p);r.Z=p}else r.Z=null};
  ils = /[#\?@]/g;
  St = function(r,p,I){return typeof r==="string"?(r=encodeURI(r).replace(p,SGr),I&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null};
  $kB = function(r,p){p&&!r.N&&(N8(r),r.Z=null,r.W.forEach(function(I,S){const a=S.toLowerCase();S!=a&&(this.remove(S),g.C6(this,a,I))},r));
r.N=p};
  IW = function(r,p,I){p instanceof ij?(r.N=p,$kB(r.N,r.K)):(I||(p=St(p,ils)),r.N=new ij(p,r.K))};
  m5t = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  g.RJ = function(r){return r.match(m5t)};
  g.L8 = function(r){this.W=this.D=this.C="";this.Z=null;this.J=this.U="";this.K=!1;let p;r instanceof g.L8?(this.K=r.K,g.RR(this,r.C),this.D=r.D,g.rb(this,r.W),g.p6(this,r.Z),this.U=r.U,IW(this,r.N.clone()),this.J=r.J):r&&(p=g.RJ(String(r)))?(this.K=!1,g.RR(this,p[1]||"",!0),this.D=$_(p[2]||""),g.rb(this,p[3]||"",!0),g.p6(this,p[4]),this.U=$_(p[5]||"",!0),IW(this,p[6]||"",!0),this.J=$_(p[7]||"")):(this.K=!1,this.N=new ij(null,this.K))};
  g.Bk = function(r){return r instanceof g.L8?r.clone():new g.L8(r)};
  Xv = function(r,p,I,S){var a=p^r;if(!((r^50)>>4)){var B=I[O[a^4648]](O[a^4655]),N=0;B[0]||N++;const e={};for(;N<B[O[a^4663]];N+=2)B[N]&&qQ(6,a^5871,e,B[N],B[N+1]);var v=e}(r&121)==r&&(v=I!==null);(r^22)>>4>=1&&(r<<1&16)<10&&(B=I[O[a^4385]](O[a^4410],a^4391),N=I[O[a^4385]](O[a^4410],B+1),B>0&&N>0?(S[O[a^4409]]=I[O[6]](0,N),I=I[O[6]](N+1)):(S[O[a^4409]]=I,I=O[a^4388]),v=[I]);if((r|64)==r){B=a^5289;for(N=[];++B-N[O[a^5344]]-(a^5321);){switch(B){case a^5331:B-=a^5351;case a^5298:case a^5301:case a^5300:continue;
case a^5266:B=a^5318;case a^5303:case a^5302:case a^5257:continue;case a^5319:B=a^5302}N[O[a^5358]](String[O[a^5325]](B))}v=N}return v};
  pO = {eH:function(r,p){var I=r[0];r[0]=r[p%r[O[9]]];r[p%r[O[9]]]=I},
Zy:function(r){r[O[79]]()},
h9:function(r,p){r[O[28]](0,p)}};
  OF = function(r,p,I){var S=p^r;if((r-9|22)>=r&&(r+8^24)<r){var a=I[O[S^6594]](O[S^6642]);const v={};for(let e=0;e<a[O[S^6621]];e++)var B=hg(1,S^6675,a,e,v);var N=v}(r+1^24)<r&&(r+9&40)>=r&&(a=I[O[S^6185]](O[S^6192]),pO[O[S^6170]](a,S^6150),pO[O[4]](a,2),pO[O[S^6170]](a,S^6199),pO[O[S^6175]](a,S^6191),pO[O[S^6170]](a,S^6162),pO[O[S^6175]](a,6),pO[O[4]](a,1),pO[O[S^6175]](a,S^6267),N=a[O[S^6155]](O[S^6192]));return N};
  Ag = function(r,p,I,S){var a=p^r;var B;(r&121)==r&&S[O[9]]!=0&&(I=(I%S[O[9]]+S[O[9]])%S[O[9]],S[O[28]](0,1,S[O[28]](I,1,S[0])[0]));if((r+2^13)>=r&&(r+4^24)<r)for(var N=I[O[a^842]];N;)I[O[a^836]](I[O[a^863]](--N,1)[0]);return B};
  lnT = function(r,p){return Ag[O[13]](this,1,2458,r,p)};
  XF = function(r,p,I,S){var a=p^r;var B;if((r+7^15)<r&&r-5<<2>=r)for(S=(S%I[O[a^7865]]+I[O[a^7865]])%I[O[a^7865]];S--;)I[O[a^7834]](I[O[a^7854]]());(r&30)==r&&(B=encodeURIComponent(I));if(r-6>=9&&r>>1<27){for(var N=a^1646,v=[];++N-v[O[a^1575]]-(a^1550);)switch(N){case a^1556:N=a^1614;continue;case a^1653:N=a^1538;break;case a^1647:N=a^1537;continue;case a^1536:N=a^1719;case a^1621:N-=a^1556;default:v[O[a^1577]](String[O[a^1546]](N))}B=v}(r^84)>>4||(B=decodeURIComponent(I));(r|56)==r&&I[O[9]]!=0&&(N=
xQ(1,7620,S,I),S=N[0]);return B};
  Vm = function(r,p,I,S,a,B,N){var v=p^r;if(!((r^22)>>4)){hg(v^5035,v^4064,I);const C=XF(v^5047,v^1052,I[O[v^5114]](O[v^5027])||O[v^5096])[O[v^5105]](O[v^5067]);var e=I[O[v^5109]]===O[v^5062]&&C[O[v^5102]]>1&&!!C[1]}((r^45)&15)>=5&&(r|8)>>4<2&&(e=S(a,B,N));(r^25)>>3>=1&&(r<<2&4)<2&&(hg(v^1559,v^6748,I),e=I[O[v^1619]]);return e};
  VKU = function(r,p,I,S,a){return Vm[O[13]](this,1,4099,r,p,I,S,a)};
  rU = function(r,p,I,S){var a=p^r;(r|1)>>3==1&&(I=(I%S[O[a^4694]]+S[O[a^4694]])%S[O[a^4694]],S[O[a^4675]](I,1));if((r>>1&7)==1){(0,I[new S(O[a^7706])/(a^7608)])((0,I[a^7754])(),I[a^7799],I[a^7752]);(0,I[a^7753])(I[a^7780],I[a^7782]);((0,I[a^7749])(I[a^7799],I[a^7807]),I[6])((0,I[a^7794])(),I[a^7680],I[a^7752]);(0,I[a^7747])((0,I[a^7793])(I[a^7772],I[a^7680]),I[a^7781],(0,I[a^7785])((0,I[a^7785])((0,I[a^7785])((0,I[a^7802])(I[a^7756]),I[a^7793],I[a^7755],I[new S(O[a^7696])/(a^7608)]),I[a^7753],I[a^7696],
I[a^7799]),I[a^7802],I[a^7782]),I[a^7680],I[a^7771]);var B=[]}return B};
  G2r = function(r,p){return rU[O[13]](this,8,4695,r,p)};
  ny = function(r,p,I){var S=p^r;if((r&105)==r){for(var a=S^6866,B=[];++a-B[O[S^6811]]-(S^6834);){switch(a){case S^6857:a=S^6846;continue;case S^6889:a=S^6867;break;case S^6867:a-=S^6784;continue;case S^6824:a=S^6898;continue;case S^6844:a=S^6861}B[O[S^6805]](String[O[S^6838]](a))}var N=B}(r-2^23)>=r&&(r-3^9)<r&&I[O[79]]();r-3<<2>=r&&r-8<<2<r&&(N=I[O[3]]?I[O[3]][O[50]](O[24]):I[O[26]]===O[24]);return N};
  Ubo = function(){return ny[O[13]](this,1,6803)};
  T5t = function(r){return Ag[O[13]](this,14,845,r)};
  UKh = function(r){return Xv[O[13]](this,8,3885,r)};
  g.gP = function(r,p,I){for(const S in r)if(p.call(I,r[S],S,r))return!0;return!1};
  xQ = function(r,p,I,S,a,B,N){var v=p^r;if((r|24)==r){var e=Dp(v^7042,v^15081,I);S[O[v^7064]](O[v^7083],e);var C=[]}(r+1&15)==3&&(hg(v^8935,v^16044,I),C=g.gP(I[O[v^8877]],UKh));if((r|72)==r){var b=I[O[v^2562]];S[O[v^2597]](function(J,W,X){this[O[v^2572]](X[W]=I[(I[O[v^2561]](J)-I[O[v^2561]](this[W])+W+b--)%I[O[v^2562]]])},a[O[v^2589]](O[v^2564]))}(r&11)==r&&(I=(I%S[O[v^7628]]+S[O[v^7628]])%S[O[v^7628]],e=S[0],S[0]=S[I],S[I]=e,C=[I]);
r>>2<14&&(r<<2&13)>=11&&(C=S(a,B,N));return C};
  $mr = function(r,p,I,S,a){return xQ[O[13]](this,7,5652,r,p,I,S,a)};
  YSB = function(r,p){return XF[O[13]](this,57,6352,r,p)};
  CXi = function(){return XF[O[13]](this,15,1569)};
  ga9 = function(){return Xv[O[13]](this,74,5283)};
  sV5 = function(r){return ny[O[13]](this,2,3795,r)};
  i8F = function(){return Dp[O[13]](this,3,8289)};
  FVF = function(r,p){return XF[O[13]](this,7,7863,r,p)};
  w0B = function(r,p,I,S,a,B,N,v){return Dp[O[13]](this,9,6170,r,p,I,S,a,B,N,v)};
  tHi = function(r,p,I){return xQ[O[13]](this,72,2627,r,p,I)};
  ZaU = function(r,p,I,S,a,B){return hg[O[13]](this,33,7355,r,p,I,S,a,B)};
  g.ZY = function(r,p,I){for(const S in r)p.call(I,r[S],S,r)};
  $6 = function(r,p,I,S){var a=p^r;if((r-4|38)>=r&&(r-7|8)<r){hg(a^3879,a^4972,I);let N=I[O[a^3965]]+(I[O[a^3965]]?O[a^3956]:O[a^3877])+I[O[a^3948]]+I[O[a^3957]];if(xQ(a^3957,a^11734,I)){const v=[];g.ZY(I[O[a^3945]],(e,C)=>{e!==null&&v[O[a^3936]](`${C}=${e}`)});
N+=`?${v[O[a^3923]](O[a^3905])}`}var B=N}(r|24)==r&&(S=(S%I[O[a^8661]]+I[O[a^8661]])%I[O[a^8661]],I[O[a^8640]](-S)[O[a^8595]]()[O[a^8690]](function(N){I[O[a^8694]](N)}));
return B};
  FhK = function(r,p){return $6[O[13]](this,24,8644,r,p)};
  fos = 1176884038;
  Dp = function(r,p,I,S,a,B,N,v,e,C){var b=p^r;if((r&90)==r)a:{var J=I[O[b^8573]](O[b^8548]),W=[null,O[b^8541],lnT,O[b^8574],-(b^1750141593),J,VKU,-(b^910443313),b^110469087,b^1109591428,G2r,Ubo,-(b^1875030288),b^251456883,-(b^379184412),-(b^1924667040),J,b^2023899297,b^558384768,T5t,-(b^322496330),-(b^842637349),b^1713726829,-(b^229978725),b^955898230,null,b^610186524,null,-(b^1321956646),-(b^802080910),-(b^1306009363),b^1889695653,b^1084271771,O[b^8480],$mr,b^1424669349,b^1558392791,-(b^1538584055),
b^602441533,-(b^687892972),b^1778605327,-(b^1950264008),YSB,CXi,-(b^463137357),-(b^230935611),-(b^985386850),-(b^1077184699),b^1220315950,b^1341674756,b^1322161445,/(")}([,{])\\}'{\\/,b^49368195,b^1110771099,b^1435840623,b^1430702088,-(b^736260218),J,ga9,sV5,-(b^863941124),i8F,b^251456883,-(b^1653850298),b^584633309,O[b^8509],FVF,w0B,tHi,-(b^1786576680),-(b^1735602605),-(b^1903331980),b^2108569478,b^2109756477,b^1013550076,-(b^256020138),b^1490617264,-(b^710974840),b^1288317407,-(b^180317984),-(b^
1678469515),ZaU,-(b^798472278),FhK,-(b^1944730550)];W[0]=W;W[b^8562]=W;W[b^8560]=W;if(typeof fos===O[b^8535]){var X=I;break a}try{try{var d=Dp(b^8574,b^9872,W,Date)}catch(M){d=rU(2,b^16185,W,Date)}try{W[b^8547]>=(b^8556)?((((((0,W[b^8522])(W[b^8486],W[b^8524]),W[b^8566])((0,W[6])((0,W[b^8527])(),W[b^8567],W[3]),W[b^8513],W[b^8507]),W[b^8505])(W[b^8524]),W[b^8490])(W[b^8524],W[b^8547]),(0,W[b^8522])(W[b^8515],W[b^8567]),(0,W[new Date(O[b^8498])/(b^8835)])(W[b^8539],W[b^8494]),W[b^8505])(W[b^8507]),
W[b^8542])(W[b^8507],W[b^8545]):((((0,W[b^8574])(W[b^8567],W[b^8572]),W[b^8522])(W[b^8569],W[b^8507]),W[b^8566])((0,W[b^8530])((((0,W[b^8562])(W[b^8525],W[b^8507]),W[b^8566])((0,W[b^8574])(W[b^8524],W[b^8493]),W[b^8513],W[b^8541]),W[b^8564])(W[b^8521],W[b^8572]),W[2],(0,W[b^8530])(),W[b^8541],W[5]),W[b^8495],W[b^8537],W[b^8512]),W[b^8483])(W[b^8541],W[1])}catch(M){(0,W[2])((0,W[b^8551])(),W[b^8490],W[b^8494])}finally{(W[new Date(O[b^8564])/(b^8835)]<-(b^8546)||((0,W[b^8491])((0,W[b^8483])(W[b^8518],
W[new Date(O[2])/(b^8835)]),W[b^8535],W[b^8492],W[b^8518]),null))&&(0,W[b^8527])((0,W[b^8483])(W[b^8541],W[b^8531]),W[b^8567],W[b^8550],W[b^8569])}}catch(M){X=O[b^8511]+I;break a}X=J[O[b^8543]](O[b^8548])}(r^94)>>3>=0&&(r^12)<7&&(X=S(a,B,N,v,e,C));if((r>>1&15)==1){J=b^8226;for(W=[];++J-W[O[b^8299]]-(b^8258);)switch(J){case b^8268:J=b^8253;default:W[O[b^8293]](String[O[b^8262]](J));case b^8252:case b^8253:case b^8194:break;case b^8217:J-=b^8238;case b^8254:case b^8255:continue;case b^8280:J=b^8270;
case b^8249:}X=W}r+3>>3==3&&(I[b^2018]!=new S(O[b^1954])/(b^1030)&&(I[b^1995]!==3||(((0,I[b^1983])((0,I[b^2020])(I[b^2034],I[b^2046]),I[b^2005],(0,I[b^1996])((0,I[b^2045])(I[b^2046]),I[b^1962],(0,I[b^2003])(),I[b^2007],I[b^1999]),I[b^2046]),I[b^1996])((0,I[b^2005])(I[b^2007]),I[b^2020],I[b^1994],I[b^2007]),0))&&((((0,I[b^1996])(((0,I[2])(I[b^1998],I[5]),I[b^2020])(I[b^1990],I[b^2046]),I[b^2045],I[b^2039]),I[1])(I[b^1978],I[b^2043]),I[b^1964])(I[0]),I[b^1967])(I[b^1978],I[b^2015]),I[b^1992]<=-6&&(I[b^
1964]!==6||((0,I[b^1967])((0,I[b^2018])(I[b^2033],I[b^2038]),I[b^2012],I[b^1985]),O[b^2017]))&&(0,I[b^1995])((0,I[b^2016])((0,I[b^1988])(),I[b^1985],I[b^1966]),I[b^1959],I[b^1994],I[b^1993]),I[b^2034]!=6&&(I[b^1955]===(b^2025)?(((0,I[b^1959])(I[b^2004],I[b^2047]),(0,I[b^2012])(I[b^2004]),I[b^1991])(I[b^2010],I[b^1994]),I[b^1999])(I[6],I[b^2033])|(0,I[b^1991])(I[b^2020],I[b^1994]):(0,I[b^2019])(((0,I[b^2018])(I[b^2006],I[b^2008]),I[b^2003])(I[b^2045],I[b^1966]),I[b^2009],(0,I[b^2007])(I[b^1966],I[b^
2021]),I[b^2003],(0,I[b^2046])(I[b^1957],I[(b^2039)+4%(new S(O[b^2009])/(b^1030))]),I[b^2044],I[b^1978])),I[6]!=3&&(0,I[b^1967])((0,I[b^2007])(I[1],I[b^2041]),I[b^1955],I[b^1989]),I[b^2046]!==-4&&(I[b^2008]!==-3||(((0,I[b^2006])(I[b^1958],I[b^1993]),(0,I[b^1981])((0,I[b^2009])(),I[b^2003],I[b^1967]),I[b^1981])((0,I[5])(),I[b^2023],I[1]),0))&&(0,I[b^2002])(((0,I[b^1966])(I[b^2007],I[b^1964]),I[b^1962])(I[b^2003],I[b^2008]),I[b^1981],(0,I[b^2009])(),I[b^2012],I[b^1967]),(I[b^2042]>-5||((0,I[b^1985])(I[b^
2023])<=(0,I[b^1962])(I[b^1993],I[b^1956]),0))&&((0,I[b^2013])(I[b^2014],I[b^1987]),I[b^2001])(I[b^2006],I[b^2022]),I[b^2022]!=-4&&(I[b^2016]===new S(O[b^1982])/(b^1030)?((0,I[b^1952])((0,I[b^2044])(),I[b^2006],I[b^2002]),(0,I[b^1952])((0,I[3])(),I[4],I[b^2034]),(0,I[b^2001])(I[b^2003],I[b^2032])):((0,I[b^2045])(I[new S(O[b^1979])/(b^1030)],I[5]),I[b^2045])(I[b^2003],I[b^1982])&(0,I[b^2005])(I[b^1961],I[b^1996])),I[b^2022]!==(b^2022)&&((0,I[b^2045])(I[0],I[b^2008]),1)||(0,I[b^1988])(I[b^2032]),(I[b^
2E3]<=6||(((0,I[b^2013])(I[b^2040],I[b^1994]),I[b^2013])(I[b^1966],I[b^2032]),0))&&(0,I[b^2009])((0,I[b^2033])(I[b^1987],I[b^2019]),I[b^2045],I[b^1996],I[b^1989]),I[b^2047]<=-(b^2023)&&((0,I[b^2037])((0,I[b^2005])(I[b^1960],I[b^1996]),I[2],I[b^2032]),O[b^1960])||(0,I[b^2035])((0,I[b^1980])(I[b^2034]),I[b^1999],I[b^1987],I[b^2014]),X=[]);r>>1&7||(hg(b^8232,b^15459,I),(J=I[O[b^8302]][O[b^8283]]||null)&&(J=xQ(b^8312,b^15336,J,I)),X=[]);return X};
  qQ = function(r,p,I,S,a){var B=p^r;if(r-7<<1<r&&(r-6^9)>=r){if(S===O[B^1174]){var N;(N=a[O[B^1245]](O[B^1183]))>=0?(S=`cmo=${a[O[6]](0,N)}`,a=a[O[6]](N+1)):(N=a[O[B^1245]](O[B^1157]))>=0&&(S=`cmo=${a[O[6]](0,N)}`,a=a[O[6]](N+3))}I[S]=a}if(!(r-9&6)){if(!(XV(I[O[3]])||I[O[3]][O[B^5848]](O[B^5874])||I[O[3]][O[B^5848]](O[B^5885])||I[O[3]][O[B^5848]](O[B^5810])))throw new g.oa(O[B^5833],I[O[3]]);N=g.Bk(I[O[3]]);I[O[B^5872]]=N[O[B^5849]];I[O[B^5857]]=N[O[B^5860]]+(N[O[B^5857]]!=null?`:${N[O[B^5857]]}`:O[B^
5861]);var v=N[O[3]];v[O[B^5848]](O[B^5835])?(I[O[B^5880]]=O[B^5835],v=v[O[6]](B^5860)):v[O[B^5848]](O[B^5827])?(I[O[B^5880]]=O[B^5827],v=v[O[6]](B^5863)):v[O[B^5848]](O[B^5844])?(v=Xv(2,B^1987,v,I),v=v[0]):(I[O[B^5880]]=v,v=O[B^5861]);var e=I[O[B^5860]];I[O[B^5860]]=Xv(B^5840,B^1262,v);Object[O[0]](I[O[B^5860]],OF(B^5883,B^3887,N[O[5]][O[B^5855]]()));Object[O[0]](I[O[B^5860]],e);I[O[B^5860]][O[B^5886]]===O[B^5829]&&(delete I[O[B^5860]][O[B^5886]],I[O[B^5880]]+=O[B^5843]);I[O[3]]=O[B^5861];I[O[1]]=
O[B^5861];I[O[5]]&&(N=Dp(1,B^13963,I));var C=[]}return C};
  g.R = class{constructor(r){this.name=r}};
  hVQ = {};
  g.m = function(r,p){if(r)return r[p.name]};
  $F9 = String(dF);
  g.OK = {};
  g.wU = function(r,p){r=r.split(".");p=p||g.OK;for(var I=0;I<r.length;I++)if(p=p[r[I]],p==null)return null;return p};
  bD = {};
  g.h = function(r,p){return r in bD?bD[r]:p};
  JW = function(...r){r=arguments;var p=bD;r.length>1?p[r[0]]=r[1]:r.length===1&&Object.assign(p,r[0])};
  OH = function(r,p,I,S,a){var B=g.wU("yt.logging.errors.log");B?B(r,"WARNING",p,I,S,void 0,a):(B=g.h("ERRORS",[]),B.push([r,"WARNING",p,I,S,void 0,a]),JW("ERRORS",B))};
  iCU = {};
  Ba = function(r){return decodeURIComponent(r.replace(/\+/g," "))};
  Smv = /^[\w.]*$/;
  yO = function(r){return r&&r.match(Smv)?r:Ba(r)};
  GB = function(r){var p=typeof r;return p!="object"?p:r?Array.isArray(r)?"array":p:"null"};
  g.qK = function(r){var p=GB(r);return p=="array"||p=="object"&&typeof r.length=="number"};
  g.WR = function(r,p){for(let I=1;I<arguments.length;I++){const S=arguments[I];if(g.qK(S)){const a=r.length||0,B=S.length||0;r.length=a+B;for(let N=0;N<B;N++)r[a+N]=S[N]}else r.push(S)}};
  dF = function(r,p){p=r.split(p);const I={};for(let B=0,N=p.length;B<N;B++){const v=p[B].split("=");if(v.length===1&&v[0]||v.length===2)try{const e=yO(v[0]||""),C=yO(v[1]||"");if(e in I){const b=I[e];Array.isArray(b)?g.WR(b,C):I[e]=[b,C]}else I[e]=C}catch(e){var S=e,a=v[0];const C=String(dF);S.args=[{key:a,value:v[1],query:r,method:$F9===C?"unchanged":C}];iCU.hasOwnProperty(a)||OH(S)}}return I};
  wF = function(r){r.charAt(0)==="?"&&(r=r.substring(1));return dF(r,"&")};
  hg = function(r,p,I,S,a,B,N,v){var e=p^r;if(r-4<14&&((r^50)&15)>=1){var C=I[S],b=C[O[e^972]](O[e^910]);b>0?qQ(e^961,e^1814,a,C[O[6]](0,b),C[O[6]](b+1)):C&&(a[C]=O[e^969]);var J=[]}if(!((r^25)>>4))a:{b=g.m(I,hVQ)||I[O[e^3186]];C={nt:!1,Ap:O[e^3136],ZX:O[e^3136],s:O[e^3136]};if(!b){J=C;break a}b=wF(b);C[O[e^3199]]=!0;C[O[e^3191]]=b[O[1]];C[O[e^3102]]=b[O[e^3078]];C[O[e^3158]]=b[O[e^3158]];J=C}r-8<<1>=r&&(r+1^2)<r&&(J=S(B,N,v));(r|64)==r&&I[O[3]]&&(C=qQ(1,5867,I));return J};
  CB = class{constructor(r){this.value=r}get(){return this.value}};
  A_ = class extends CB{W(){return"metadata_type_remote_slots_data"}};
  g.FA = function(r){const p={};for(const I in r)p[I]=r[I];return p};
  g.fb = class{constructor(r,p=!1){this[O[3]]=r;this[O[5]]=p;this[O[11]]=this[O[18]]=this[O[26]]=O[15];this[O[14]]={};this[O[1]]=O[15]}set(r,p){this[O[14]][r]!==p&&(this[O[14]][r]=p,this[O[1]]=O[15])}get(r){hg(75,7168,this);return this[O[14]][r]||null}A_(){this[O[1]]||(this[O[1]]=$6(4,3939,this));return this[O[1]]}clone(){const r=new g.fb(this[O[3]],this[O[5]]);r[O[26]]=this[O[26]];r[O[18]]=this[O[18]];r[O[11]]=this[O[11]];r[O[14]]=g.FA(this[O[14]]);r[O[1]]=this[O[1]];return r}};
  //#endregion --- end [nFunction] ---

  return {test: g.fb};
})({});

const clInstance = new exportedVars.test('https://rr2---sn-hxtxgcg-8qjs.googlevideo.com/videoplayback?expire=1772958788&ei=5N-sadLYLs7y1sQPmtO8yAw&ip=128.201.98.50&id=o-AGyHCvKkbBPLFEPWWfTQAEUgEt1z8jTmiw1-zZ5488W9&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=47&met=1772937188%2C&mh=ek&mm=31%2C29&mn=sn-hxtxgcg-8qjs%2Csn-pmcg-bg0d&ms=au%2Crdu&mv=m&mvi=2&pl=24&rms=au%2Cau&ctier=A&pfa=5&gcr=br&initcwndbps=1535000&hightc=yes&siu=1&spc=6dlaFLbIxmCxBREGXTtluSOV6b-fuKsB1YD-5i8jxy1FhMNsDg&svpuc=1&ns=pHfTgBmARVZerwMkO_gfgNgT&sabr=1&rqh=1&mt=1772936735&fvip=1&keepalive=yes&fexp=51565115%2C51565681%2C51791334&c=WEB_REMIX&n=W9yW8eTC2Gh1Ld46&sparams=expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Cgcr%2Chightc%2Csiu%2Cspc%2Csvpuc%2Cns%2Csabr%2Crqh&sig=AHEqNM4wRgIhAIDhpKe-5mbsupjZzYZzyPzSJgX8lwYP8x4XzENs_4DyAiEAm0UK7qZl5WeArpO2w2nBfHHG4HJ5fvDJbdXt3Uk86bw%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAPQ-FKqTFcPAvUK4zjxJFpGF_og62eAD1XobchXrbJpiAiEA6UR7Efs7H4yd6UiRaUwB7eIw3YIoGo4v3K_Lnj_ak38%3D', !0);
console.log(clInstance.get('n'), clInstance);