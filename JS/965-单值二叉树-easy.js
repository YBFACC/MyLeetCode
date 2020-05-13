/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * 自己--easy
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return false
  let unique = root.val

  const dfs = function (node) {
    if (!node) return true

    return node.val === unique && dfs(node.right) && dfs(node.left)
  }
  return dfs(root)
}
// @lc code=end
