/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * copy--遍历-栈-中序遍历--性能好
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root === null) return []
  let res = [],
    stack = []

  while (root || stack.length) {
    if (root.left) {
      stack.push(root)
      root = root.left
    } else if (!root.left && !root.right) {
      res.push(root.val)
      root = stack.pop()
      root && (root.left = null)
    } else if (root.right) {
      res.push(root.val)
      root = root.right
    }
  }
  return res
}
// @lc code=end

// /**
//  * 自己--中序遍历-递归
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var inorderTraversal = function(root) {
//   if (root === null) return []
//   let res = []
//   const func = function(node) {
//     if (node === null) return null
//     func(node.left)
//     res.push(node.val)
//     func(node.right)
//   }
//   func(root)
//   return res
// }
