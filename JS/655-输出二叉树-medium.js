/*
 * @lc app=leetcode.cn id=655 lang=javascript
 *
 * [655] 输出二叉树
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
 * 参考--满二叉树--递归
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
  let deepth = 1
  const dfs = function (node, index) {
    if (!node) return
    deepth = Math.max(deepth, index)
    dfs(node.left, index + 1)
    dfs(node.right, index + 1)
  }
  dfs(root, 1)

  const width = 2 ** deepth - 1
  const res = Array.from({ length: deepth }, () =>
    Array.from({ length: width }, () => '')
  )
  const _dfs = function (node, deepth, left, right) {
    if (!node) return
    const mid = (left + right) >> 1
    res[deepth][mid] = node.val + ''
    _dfs(node.left, deepth + 1, left, mid)
    _dfs(node.right, deepth + 1, mid + 1, right)
  }
  _dfs(root, 0, 0, res[0].length)

  return res
}
// @lc code=end

printTree(TreeNode.create([5, 3, 6, 2, 4, null, 7]))
