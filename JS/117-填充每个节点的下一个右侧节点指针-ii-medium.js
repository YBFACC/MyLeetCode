/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 自己--bfs好做--next指向方法需要判空,难做
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root
  let bfs = [root]
  while (bfs.length) {
    let size = bfs.length
    while (size > 0) {
      let curr = bfs.shift()
      curr.left && bfs.push(curr.left)
      curr.right && bfs.push(curr.right)

      if (size === 1) {
        break
      }
      curr.next = bfs[0]
      size--
    }
  }
  return root
}
// @lc code=end
