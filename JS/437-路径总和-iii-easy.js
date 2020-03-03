/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * 参考--用属性来标记是否当过head-有忍者当感觉来--性能一般
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  let count = 0
  const dfs = function(node, nodeSum) {
    if (!node) return

    if (!node.head) {
      node.head = true
      node.left && dfs(node.left, 0)
      node.right && dfs(node.right, 0)
    }
    let value = nodeSum + node.val
    if (value === sum) {
      count++
    }
    node.left && dfs(node.left, value)
    node.right && dfs(node.right, value)
  }
  dfs(root, 0)
  return count
}
// @lc code=end
