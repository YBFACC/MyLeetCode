/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * 参考--复习下最大深度求法--性能好
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, n = 0) {
  if (!root) return 0
  n++
  var n1 = 0,
    n2 = 0
  if (root.left) {
    n1 = maxDepth(root.left, n)
  }
  if (root.right) {
    n2 = maxDepth(root.right, n)
  }
  return Math.max(n, n1, n2)
}
// @lc code=end

/**
 *  自底向上法
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  } else {
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    return Math.max(left, right) + 1
  }
}
