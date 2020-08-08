/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
 * 参考--后序
 * 为根节点时=>left + right + 2
 * 为直线时=>递归返回路径长度
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  if (!root) return 0
  let res = 0
  const dfs = function (node) {
    if (!node) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)
    let len = 0
    if (
      node.left &&
      node.right &&
      node.val === node.left.val &&
      node.val === node.right.val
    ) {
      res = Math.max(res, left + right + 2)
    }
    if (node.left && node.val === node.left.val) {
      len = Math.max(len, left + 1)
    }
    if (node.right && node.val === node.right.val) {
      len = Math.max(len, right + 1)
    }
    res = Math.max(res, len)
    return len
  }
  dfs(root)
  return res
}
// @lc code=end
