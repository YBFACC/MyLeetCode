/*
 * @lc app=leetcode.cn id=814 lang=javascript
 *
 * [814] 二叉树剪枝
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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (!root) return
  const func = function (node) {
    if (!node) return 0
    let right = func(node.right)
    let left = func(node.left)

    if (left === 0) {
      node.left = null
    }
    if (right === 0) {
      node.right = null
    }
    return Math.max(right, left, node.val)
  }
  func(root)
  return root
}
// @lc code=end
