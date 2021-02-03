/*
 * @lc app=leetcode.cn id=778 lang=typescript
 *
 * [778] 水位上升的泳池中游泳
 */

//提示--优先队列
//每次从最小的的路径开始选择

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start
function swimInWater(grid: number[][]): number {
  const Rows = grid.length, Cols = grid[0].length
  const Ways = [[1, 0], [-1, 0], [0, -1], [0, 1]]
  let res = 0
  const heap = new Heap<number[]>([], (a: number[], b: number[]) => {
    return a[2] >= b[2]
  })
  heap.insert([0, 0, grid[0][0]])
  const set = new Set()
  while (!heap.isEmpty()) {
    const [x, y, dist] = heap.extract() as number[]
    const Path = `${x}_${y}`
    set.add(Path)
    for (const [_x, _y] of Ways) {
      const newX = x + _x
      const newY = y + _y
      const newPath = `${newX}_${newY}`
      if (newX >= 0 && newX < Rows && newY >= 0 && newY < Cols
        && !set.has(newPath)
      ) {
        heap.insert([newX, newY, grid[newX][newY]])
      }
    }
    res = Math.max(res, dist)
    if (x === Rows - 1 && y === Cols - 1) break
  }

  return res
};
// @lc code=end

swimInWater([[0, 2], [1, 3]])
swimInWater([[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]])