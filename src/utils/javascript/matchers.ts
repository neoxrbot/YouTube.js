import type { ESTree } from 'meriyah';
import { WALK_STOP, walkAst, memberToString } from './helpers.js';

function isStringLiteral(node: ESTree.Node | null | undefined, value: string): boolean {
  return node?.type === 'Literal' && node.value === value;
}

function isTruthyBooleanNode(node: ESTree.Node | null | undefined): boolean {
  return (node?.type === 'Literal' && node.value === true) || (
    node?.type === 'UnaryExpression' &&
    node.operator === '!' &&
    node.argument.type === 'Literal' &&
    node.argument.value === 0
  );
}

function isSignatureHelperFunction(node: ESTree.FunctionExpression): boolean {
  if (node.params.length !== 3 || !node.body || node.body.type !== 'BlockStatement') {
    return false;
  }

  const helperName = node.params[0]?.type === 'Identifier' ? node.params[0].name : null;
  const signatureParam = node.params[1]?.type === 'Identifier' ? node.params[1].name : null;

  if (!helperName || !signatureParam) {
    return false;
  }

  let hasUrlHelperConstructor = false;
  let hasAlrSet = false;
  let hasSignatureWrite = false;
  let returnsHelper = false;

  walkAst(node.body, (innerNode) => {
    if (
      innerNode.type === 'NewExpression' &&
      innerNode.callee.type === 'MemberExpression' &&
      innerNode.arguments.length >= 2 &&
      innerNode.arguments[0]?.type === 'Identifier' &&
      innerNode.arguments[0].name === helperName &&
      isTruthyBooleanNode(innerNode.arguments[1])
    ) {
      const calleeName = memberToString(innerNode.callee, '');
      hasUrlHelperConstructor ||= typeof calleeName === 'string' && calleeName.startsWith('g.');
    } else if (
      innerNode.type === 'CallExpression' &&
      innerNode.callee.type === 'MemberExpression' &&
      innerNode.callee.object.type === 'Identifier' &&
      innerNode.callee.object.name === helperName
    ) {
      if (
        innerNode.arguments.length >= 2 &&
        isStringLiteral(innerNode.arguments[0], 'alr') &&
        isStringLiteral(innerNode.arguments[1], 'yes')
      ) {
        hasAlrSet = true;
      } else if (
        innerNode.arguments.length >= 2 &&
        innerNode.arguments[0]?.type === 'Identifier' &&
        innerNode.arguments[0].name === signatureParam
      ) {
        hasSignatureWrite = true;
      }
    } else if (
      innerNode.type === 'ReturnStatement' &&
      innerNode.argument?.type === 'Identifier' &&
      innerNode.argument.name === helperName
    ) {
      returnsHelper = true;
    }

    if (hasUrlHelperConstructor && hasAlrSet && hasSignatureWrite && returnsHelper) {
      return WALK_STOP;
    }
  });

  return hasUrlHelperConstructor && hasAlrSet && hasSignatureWrite && returnsHelper;
}

function getUrlHelperClassName(node: ESTree.FunctionExpression): string | null {
  if (!node.body) return null;

  const helperName = node.params[0]?.type === 'Identifier' ? node.params[0].name : null;

  if (!helperName) {
    return null;
  }

  let className: string | null = null;

  walkAst(node.body, (innerNode) => {
    if (
      innerNode.type === 'NewExpression' &&
      innerNode.callee.type === 'MemberExpression' &&
      innerNode.arguments.length >= 2 &&
      innerNode.arguments[0]?.type === 'Identifier' &&
      innerNode.arguments[0].name === helperName &&
      isTruthyBooleanNode(innerNode.arguments[1])
    ) {
      const calleeName = memberToString(innerNode.callee, '');
      if (calleeName?.startsWith('g.')) {
        className = calleeName;
        return WALK_STOP;
      }
    }
  });

  return className;
}

export function sigMatcher(node: ESTree.Node) {
  if (
    node.type === 'VariableDeclarator' &&
    node.id.type === 'Identifier' &&
    node.init?.type === 'FunctionExpression' &&
    isSignatureHelperFunction(node.init)
  ) {
    return node;
  }

  if (
    node.type === 'ExpressionStatement' &&
    node.expression.type === 'AssignmentExpression' &&
    node.expression.operator === '=' &&
    node.expression.left.type === 'Identifier' &&
    node.expression.right.type === 'FunctionExpression' &&
    isSignatureHelperFunction(node.expression.right)
  ) {
    return node;
  }

  return false;
}

export function nMatcher(node: ESTree.Node) {
  if (node.type === 'VariableDeclarator') {
    if (
      node.id.type === 'Identifier' &&
      node.init?.type === 'FunctionExpression' &&
      isSignatureHelperFunction(node.init)
    ) {
      const className = getUrlHelperClassName(node.init);
      if (className) {
        return {
          type: 'Identifier',
          name: className,
          start: node.id.start,
          end: node.id.end,
          range: node.id.range
        } as unknown as ESTree.Identifier;
      }
    }

    if (
      node.id.type === 'Identifier' &&
      node.init?.type === 'ArrayExpression' &&
      node.init.elements[0]?.type === 'Identifier'
    ) {
      return node.init.elements[0];
    }

    return false;
  }

  if (
    node.type === 'ExpressionStatement' &&
    node.expression.type === 'AssignmentExpression' &&
    node.expression.operator === '=' &&
    node.expression.right.type === 'FunctionExpression'
  ) {
    if (
      node.expression.left.type === 'Identifier' &&
      isSignatureHelperFunction(node.expression.right)
    ) {
      const className = getUrlHelperClassName(node.expression.right);
      if (className) {
        return {
          type: 'Identifier',
          name: className,
          start: node.expression.left.start,
          end: node.expression.left.end,
          range: node.expression.left.range
        } as unknown as ESTree.Identifier;
      }
    }

    if (node.expression.left.type !== 'MemberExpression') {
      return false;
    }

    const object = node.expression.left.object;
    const property = node.expression.left.property;

    if (
      !node.expression.left.computed &&
      object.type === 'Identifier' &&
      object.name === 'g' &&
      property.type === 'Identifier' &&
      property.name === 'ih'
    ) {
      return node.expression.left;
    }
  }

  return false;
}

export function timestampMatcher(node: ESTree.Node) {
  if (node.type !== 'VariableDeclarator' || node.init?.type !== 'FunctionExpression') {
    return false;
  }

  const funcBody = node.init.body;
  if (!funcBody) return false;

  let foundObject: ESTree.Node | null = null;

  walkAst(funcBody, (innerNode) => {
    if (innerNode.type === 'ObjectExpression') {
      for (const prop of innerNode.properties) {
        if (prop.type === 'Property' && prop.key.type === 'Identifier' && prop.key.name === 'signatureTimestamp') {
          foundObject = prop;
          return WALK_STOP;
        }
      }
    }
  });

  return foundObject || false;
}
