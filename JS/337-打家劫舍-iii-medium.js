/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */
const { TreeNode } = require('../LeetCode-Class/index')
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 重做--参考--树形dp
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  if (!root) return 0
  const dfs = function (node) {
    if (!node) return [0, 0]
    let left = dfs(node.left)
    let right = dfs(node.right)

    return [
      node.val + left[1] + right[1],
      Math.max(left[1], left[0]) + Math.max(right[0], right[1])
    ]
  }

  return Math.max(...dfs(root))
}
// @lc code=end

console.log(rob(TreeNode.create([4, 1, null, 2, null, 3])))
