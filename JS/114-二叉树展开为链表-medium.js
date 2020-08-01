/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * 自己-重做还是看了以前的做法
 * 后序遍历--将左节点的末尾接上右节点
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return null
  flatten(root.left)
  flatten(root.right)
  const temp = root.right
  root.right = root.left
  root.left = null
  while (root.right) {
    root = root.right
  }
  root.right = temp
}

// @lc code=end

let a = TreeNode.create([1, 2, 5, 3, 4, null, 6])

flatten(a)
