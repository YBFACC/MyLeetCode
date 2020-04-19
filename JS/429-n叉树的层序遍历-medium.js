/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 自己--bfs--性能一般
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let res = []
  let bfs = [root]
  while (bfs.length > 0) {
    let size = bfs.length
    let temp = []
    while (size > 0) {
      let curr = bfs.shift()
      temp.push(curr.val)
      for (let i = 0; i < curr.children.length; i++) {
        bfs.push(curr.children[i])
      }
      size--
    }
    res.push(temp.length > 0 && temp.slice())
  }
  return res
}
// @lc code=end
