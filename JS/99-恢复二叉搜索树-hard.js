/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * 参考--重做--morris遍历-对于如何存储2个节点
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  if (!root) return
  let curr = root
  let resNode1 = null
  let resNode2 = null
  let lastNode = null
  while (curr) {
    if (curr.left) {
      let preNode = curr.left
      while (preNode.right && preNode.right !== curr) {
        preNode = preNode.right
      }
      if (!preNode.right) {
        preNode.right = curr
        curr = curr.left
      } else {
        if (lastNode && lastNode.val > curr.val) {
          if (resNode1) {
            resNode2 = curr
          } else {
            resNode1 = lastNode
            resNode2 = curr
          }
        }
        lastNode = curr
        preNode.right = null
        curr = curr.right
      }
    } else {
      if (lastNode && lastNode.val > curr.val) {
        if (resNode1) {
          resNode2 = curr
        } else {
          resNode1 = lastNode
          resNode2 = curr
        }
      }
      lastNode = curr
      curr = curr.right
    }
  }
  ;[resNode1.val, resNode2.val] = [resNode2.val, resNode1.val]
  
}

// @lc code=end

recoverTree(TreeNode.create([3, 1, 4, null, null, 2]))
