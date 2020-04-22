/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * 自己--bfs--性能好
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return []
  let bfs = [root]
  let res = []
  while (bfs.length > 0) {
    let size = bfs.length
    while (size > 0) {
      let curr = bfs.shift()
      curr.left && bfs.push(curr.left)
      curr.right && bfs.push(curr.right)
      if (size === 1) {
        res.push(curr.val)
      }
      size--
    }
  }
  return res
}
// @lc code=end
