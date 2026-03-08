import type { ESTree } from 'meriyah';
import { WALK_STOP, walkAst, memberToString } from './helpers.js';

function isSignatureHelperFunction(node: ESTree.FunctionExpression): boolean {
  if (node.params.length !== 3 || !node.body || node.body.type !== 'BlockStatement') {
    return false;
  }

  let hasUrlHelper = false;
  let hasM = false;
  let hasZk = false;
  let hasSp = false;

  walkAst(node.body, (innerNode) => {
    if (innerNode.type === 'NewExpression' && innerNode.callee.type === 'MemberExpression') {
      hasUrlHelper ||= memberToString(innerNode.callee, '') === 'g.ih';
    } else if (innerNode.type === 'CallExpression' && innerNode.callee.type === 'Identifier') {
      hasM ||= innerNode.callee.name === 'M_';
      hasZk ||= innerNode.callee.name === 'Zk';
      hasSp ||= innerNode.callee.name === 'sp';
    }

    if (hasUrlHelper && hasM && hasZk && hasSp) {
      return WALK_STOP;
    }
  });

  return hasUrlHelper && hasM && hasZk && hasSp;
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
    node.expression.left.type === 'MemberExpression' &&
    node.expression.right.type === 'FunctionExpression'
  ) {
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
