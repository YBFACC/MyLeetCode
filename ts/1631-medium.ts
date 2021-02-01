/*
 * @lc app=leetcode.cn id=1631 lang=typescript
 *
 * [1631] 最小体力消耗路径
 */

//参考--dijkstra最短路径

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start

function minimumEffortPath(heights: number[][]): number {
  const Rows = heights.length, Cols = heights[0].length
  const Size = Rows * Cols
  const Ways = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const heap = new Heap<number[]>([], (a: number[], b: number[]) => {
    return a[2] >= b[2]
  })
  const dist = Array.from({ length: Size }, () => Infinity)
  const set = new Set()
  dist[0] = 0
  heap.insert([0, 0, 0])
  while (!heap.isEmpty()) {
    const [x, y, val] = heap.extract() as number[]
    const Path = `${x}_${y}`
    if (set.has(Path)) continue
    if (x === Rows - 1 && y === Cols - 1) break
    set.add(Path)
    for (const [_x, _y] of Ways) {
      const newX = _x + x
      const newY = _y + y
      const index = newX * Cols + newY
      if (newX >= 0 && newX < Rows && newY >= 0 && newY < Cols &&
        Math.max(val, Math.abs(heights[x][y] - heights[newX][newY])) <= dist[index]) {
        dist[index] = Math.max(val, Math.abs(heights[x][y] - heights[newX][newY]))
        heap.insert([newX, newY, dist[index]])
      }
    }
  }
  return dist[Size - 1]
};
// @lc code=end
//1
console.log(minimumEffortPath([[1, 2, 3], [3, 8, 4], [5, 3, 5]]))
//5
console.log(minimumEffortPath([[4, 3, 4, 10, 5, 5, 9, 2], [10, 8, 2, 10, 9, 7, 5, 6], [5, 8, 10, 10, 10, 7, 4, 2], [5, 1, 3, 1, 1, 3, 1, 9], [6, 4, 10, 6, 10, 9, 4, 6]]))
//0
console.log(minimumEffortPath([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]]))
//2
console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]]))