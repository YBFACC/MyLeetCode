/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * 自己--重做--递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  const dfs = function (node1, node2) {
    if (!node1 && !node2) return true
    if (!node1 || !node2) return false
    return (
      node1.val === node2.val &&
      dfs(node1.left, node2.right) &&
      dfs(node1.right, node2.left)
    )
  }
  return dfs(root.left, root.right)
}

// @lc code=end
