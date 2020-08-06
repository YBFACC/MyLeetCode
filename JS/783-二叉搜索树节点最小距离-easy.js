/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
 * @return {number}
 */
var minDiffInBST = function (root) {
  const list = []
  const dfs = function (node) {
    if (!node) return
    dfs(node.left)
    list.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  let res = Infinity
  for (let i = 1; i < list.length; i++) {
    res = Math.min(res, list[i] - list[i - 1])
  }
  return res
}
// @lc code=end
