/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * 自己--中序+二叉搜索树=>得到升序输出--性能好
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  if (!root) return null
  let res = null
  const func = function (node) {
    if (!node) return false
    func(node.left)
    k--
    if (k === 0) {
      res = node.val
    }
    func(node.right)
  }
  func(root)
  return res
}
// @lc code=end
