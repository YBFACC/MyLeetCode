/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * 无脑bfs
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0
  let bfs = [root]
  let res = 0
  while (bfs.length > 0) {
    let size = bfs.length
    while (size > 0) {
      let curr = bfs.shift()
      res++
      curr.left && bfs.push(curr.left)
      curr.right && bfs.push(curr.right)
      size--
    }
  }
  return res
}
// @lc code=end
