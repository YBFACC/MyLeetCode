/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * dfs
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null
  let res = null
  const dfs = function (node) {
    if (!node || res) return
    if (node.val === val) {
      res = node
      return
    } else if (node.val > val) {
      dfs(node.left)
    } else {
      dfs(node.right)
    }
  }
  dfs(root)
  return res
}
// @lc code=end
