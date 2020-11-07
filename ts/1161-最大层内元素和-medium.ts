/*
 * @lc app=leetcode.cn id=1161 lang=typescript
 *
 * [1161] 最大层内元素和
 */

import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//自己--BFS模版题

function maxLevelSum(root: TreeNode | null): number {
  let res = 0
  let sum = -Infinity

  let bfs = [root]
  let count = 1

  while (bfs.length > 0) {
    let size = bfs.length
    let floor = 0
    while (size-- > 0) {
      let curr = bfs.shift() as TreeNode
      floor += curr.val
      curr.left && bfs.push(curr.left)
      curr.right && bfs.push(curr.right)
    }
    if (floor > sum) {
      sum = floor
      res = count
    }
    count++
  }

  return res
};
// @lc code=end

maxLevelSum(TreeNode.create([1, 7, 0, 7, -8, null, null]))