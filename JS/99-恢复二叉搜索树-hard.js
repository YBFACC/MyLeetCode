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
 * copy--优化到指存储2个节点
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let pre = null,
    a = null,
    b = null
  const swap = (a, b) => {
    if (a !== null && b !== null) {
      let t = a.val
      a.val = b.val
      b.val = t
    }
  }
  const findTwoSwapped = root => {
    if (root === null) return
    findTwoSwapped(root.left)
    if (pre !== null && root.val < pre.val) {
      if (!a) a = pre
      b = root
    }
    pre = root
    findTwoSwapped(root.right)
  }
  findTwoSwapped(root)
  swap(a, b)
}

// @lc code=end

recoverTree(TreeNode.create([3, 1, 4, null, null, 2]))
