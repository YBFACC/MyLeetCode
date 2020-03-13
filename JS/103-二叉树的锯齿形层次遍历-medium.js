/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * 自己-改102自己bfs骚操作--性能好
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let res = []
  const func = function(root, index, res) {
    if (root === null) return
    if (typeof res[index] === 'undefined') {
      res.push([root.val])
    } else if (index % 2 === 0) {
      res[index].push(root.val)
    } else if (index % 2 === 1) {
      res[index].unshift(root.val)
    }

    func(root.left, index + 1, res)
    func(root.right, index + 1, res)
  }
  func(root, 0, res)
  return res
}
// @lc code=end
