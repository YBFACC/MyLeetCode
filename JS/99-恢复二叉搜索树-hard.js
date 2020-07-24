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
 * 参考--【莫里斯遍历】空间o1
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  if (!root) {
    return
  }
  let curr = root
  let node1 = null
  let node2 = null
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
          if (node1) {
            node2 = curr
          } else {
            node1 = lastNode
            node2 = curr
          }
        }
        lastNode = curr
        curr = curr.right
        preNode.right = null
      }
    } else {
      if (lastNode && lastNode.val > curr.val) {
        if (node1) {
          node2 = curr
        } else {
          node1 = lastNode
          node2 = curr
        }
      }
      lastNode = curr
      curr = curr.right
    }
  }

  ;[node1.val, node2.val] = [node2.val, node1.val]
}

// @lc code=end

recoverTree(TreeNode.create([2, 1, 4, null, null, 3]))
