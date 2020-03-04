/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * 参后2改--通过中序遍历二叉搜索树得到的关键码序列是一个递增序列--性能好
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let list = []
  const dfs = function(node) {
    if (!node) return
    node.left && dfs(node.left)
    list.push(node.val)
    node.right && dfs(node.right)
  }
  dfs(root)
  let min = Number.MAX_VALUE
  for (let i = 1; i < list.length; i++) {
    let temp = list[i] - list[i - 1]
    if (temp < min) {
      min = temp
    }
  }

  return min
}
// @lc code=end

