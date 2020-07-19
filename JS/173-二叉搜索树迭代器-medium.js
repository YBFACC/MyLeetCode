/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
 */
const { TreeNode } = require('../LeetCode-Class/index.js')

// @lc code=start
/**
 * 参考--generator函数
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
  const generator = function* (params) {
    let stack = []
    while (root || stack.length) {
      while (root) {
        stack.push(root)
        root = root.left
      }
      root = stack.pop()
      yield root.val
      root = root.right
    }
  }
  this.gen = generator()
  this.pre = this.gen.next()
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let value = this.pre.value
  this.pre = this.gen.next()
  return value
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return !this.pre.done
}

// @lc code=end

let temt = TreeNode.create([7, 3, 15, null, null, 9, 20])
var obj = new BSTIterator(TreeNode.create([7, 3, 15, null, null, 9, 20]))
var param_1 = obj.next()
var param_2 = obj.hasNext()
