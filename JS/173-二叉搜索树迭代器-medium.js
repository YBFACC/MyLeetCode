/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
 */
const { TreeNode } = require('../LeetCode-Class/index.js')

// @lc code=start
/**
 * 自己--不符合O（h）
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.list = []
  dfs(this.list, root)

  return this
}

const dfs = function (list, node) {
  if (!node) return
  dfs(list, node.left)
  list.push(node.val)
  dfs(list, node.right)
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.list.length > 0) {
    return this.list.shift()
  } else {
    return void 0
  }
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.list.length > 0
}

// @lc code=end




let temt = TreeNode.create([7, 3, 15, null, null, 9, 20])
var obj = new BSTIterator(TreeNode.create([7, 3, 15, null, null, 9, 20]))
var param_1 = obj.next()
var param_2 = obj.hasNext()
