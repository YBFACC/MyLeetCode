/*
 * @lc app=leetcode.cn id=1372 lang=javascript
 *
 * [1372] 二叉树中的最长交错路径
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
 * 参考--dfs
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  if (!root) return 0
  let res = 0
  const dfs = function (node, dir, count) {
    if (!node) return
    res = Math.max(res, count)
    if (!dir) {
      dfs(node.left, 0, 1)
      dfs(node.right, 1, count + 1)
    } else {
      dfs(node.left, 0, count + 1)
      dfs(node.right, 1, 1)
    }
  }
  dfs(root.left, 0, 1)
  dfs(root.right, 1, 1)
  return res
}
// @lc code=end
