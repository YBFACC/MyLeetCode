/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * 自己--递归--迭代难
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return []
  let res = []
  const func = function (node) {
    if (!node) return null
    func(node.left)
    func(node.right)
    res.push(node.val)
  }
  func(root)
  return res
}
// @lc code=end
