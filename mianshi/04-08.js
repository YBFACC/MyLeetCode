/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode } = require('../LeetCode-Class/index')

/**
 * 自己--重做
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null
  let res = null
  function _lowestCommonAncestor(node) {
    if (!node) return { p: false, q: false }
    let left = _lowestCommonAncestor(node.left)
    let right = _lowestCommonAncestor(node.right)

    let obj = {
      p: node.val === p.val || left.p || right.p,
      q: node.val === q.val || left.q || right.q
    }

    if (!res && obj.p && obj.q) {
      res = node
    }
    return obj
  }
  _lowestCommonAncestor(root)
  return res
}
