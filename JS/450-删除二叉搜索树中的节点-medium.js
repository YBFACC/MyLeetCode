/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 */
const { TreeNode } = require('../LeetCode-Class/index.js')

// @lc code=start
/**
 * 自己--来自AVL树的删除思路
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null
  if (root.val > key) root.left = deleteNode(root.left, key)
  else if (root.val < key) root.right = deleteNode(root.right, key)
  else if (root.val === key) {
    if (root.left === null) return root.right
    else if (root.right === null) return root.left
    else {
      const next = getNext(root, key)
      root.val = next.val
      root.right = deleteNode(root.right, next.val)
    }
  }
  return root
}

function getNext(root, key) {
  let next = null
  while (root) {
    if (root.val <= key) root = root.right
    else {
      next = root
      root = root.left
    }
  }
  return next
}

// @lc code=end
let bst = TreeNode.create([5, 3, 6, 2, 4, null, 7])

deleteNode(bst, 3)
