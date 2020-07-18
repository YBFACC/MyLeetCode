/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
 */
const { TreeNode } = require('../LeetCode-Class/index.js')

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 自己--bfs
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  let finish = false
  let bfs = [root]
  while (bfs.length > 0) {
    let size = bfs.length
    while (size > 0) {
      let curr = bfs.shift()
      if (curr.left) {
        if (!finish) {
          bfs.push(curr.left)
        } else {
          return false
        }
      } else {
        finish = true
      }
      if (curr.right) {
        if (!finish) {
          bfs.push(curr.right)
        } else {
          return false
        }
      } else {
        finish = true
      }
      size--
    }
  }
  return true
}
// @lc code=end

console.log(isCompleteTree(TreeNode.create([1, 2, 3, 4, 5, 6])))
