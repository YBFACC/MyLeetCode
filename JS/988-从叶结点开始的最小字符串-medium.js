/*
 * @lc app=leetcode.cn id=988 lang=javascript
 *
 * [988] 从叶结点开始的最小字符串
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
 * 自己--DFS
 * sort排序是按照UTF-16的顺序
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  if (!root) return ''
  const res = []

  const dfs = function (node, str) {
    if (!node) return
    const _root = String.fromCodePoint(+node.val + 97)
    if (!node.left && !node.right) {
      res.push(_root + str)
    }
    dfs(node.left, _root + str)
    dfs(node.right, _root + str)
  }
  dfs(root, '')

  return res.sort()[0]
}
// @lc code=end

console.log(smallestFromLeaf(TreeNode.create([0, null, 1])))
