/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */
const { TreeNode } = require('../LeetCode-Class/index')

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 自己--中序遍历BST-不符合空间
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  if (!root) return null
  let list = []
  const dfs = function (node) {
    if (!node) return
    dfs(node.left)
    list.push(node.val)
    dfs(node.right)
  }
  dfs(root)

  list.sort((a, b) => a - b)

  const _dfs = function (node) {
    if (!node) return
    _dfs(node.left)
    node.val = list.shift()
    _dfs(node.right)
  }
  _dfs(root)
}
// @lc code=end

recoverTree(TreeNode.create([3, 1, 4, null, null, 2]))
