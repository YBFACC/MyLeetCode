/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * 参考---自顶向下的递归---性能好
 * @param {TreeNode} root
 * @return {boolean}
 */
var height = function(root) {
  if (root === null) return -1

  return 1 + Math.max(height(root.left), height(root.right))
}

var isBalanced = function(root) {
  if (root === null) return true

  return (
    Math.abs(height(root.left) - height(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}

// @lc code=end
