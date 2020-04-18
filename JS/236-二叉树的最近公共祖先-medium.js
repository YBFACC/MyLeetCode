/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 自己--后序--性能一般
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null
  let father = null
  const func = function (node) {
    if (!node) return { p: false, q: false }
    let left = func(node.right)
    let right = func(node.left)

    let obj = {
      p: left.p || right.p || node.val === p.val,
      q: left.q || right.q || node.val === q.val
    }

    if (obj.p && obj.q && !father) {
      father = node
    }
    return obj
  }
  func(root)
  return father
}
// @lc code=end
