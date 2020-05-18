/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * 自己--bfs
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root) return null
  let bfs = [root]
  let _left 
  while (bfs.length > 0) {
    let size = bfs.length
    _left = bfs[0].val
    while (size > 0) {
      let curr = bfs.shift()
      curr.left && bfs.push(curr.left)
      curr.right && bfs.push(curr.right)
      size--
    }
  }
  return _left
}
// @lc code=end
