/*
 * @lc app=leetcode.cn id=778 lang=typescript
 *
 * [778] 水位上升的泳池中游泳
 */

//参考--Dijkstra
//关键：grid[i][j] 是 [0, ..., N*N - 1] 的排列🚀


import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start
function swimInWater(grid: number[][]): number {
  const Rows = grid.length, Cols = grid[0].length
  const Ways = [[1, 0], [-1, 0], [0, -1], [0, 1]]
  const dist = Array.from({ length: Rows }, () => Array.from({ length: Cols }, () => Rows * Cols))
  const heap = new Heap<number[]>([], (a: number[], b: number[]) => {
    return a[2] >= b[2]
  })
  heap.insert([0, 0, grid[0][0]])
  dist[0][0] = grid[0][0]
  const set = new Set()
  while (!heap.isEmpty()) {
    const [x, y, val] = heap.extract() as number[]
    const Path = `${x}_${y}`
    if (set.has(Path)) continue
    set.add(Path)
    if (x === Rows - 1 && y === Cols - 1) {
      return dist[Rows - 1][Cols - 1]
    }
    for (const [_x, _y] of Ways) {
      const newX = _x + x
      const newY = _y + y
      const newPath = `${newX}_${newY}`
      if (inArea(newX, newY) && !set.has(newPath) &&
        //这里是关键：如何判断2个点的距离
        Math.max(grid[newX][newY], dist[x][y]) < dist[newX][newY]
      ) {
        //记录最大值
        dist[newX][newY] = Math.max(grid[newX][newY], dist[x][y])
        heap.insert([newX, newY, grid[newX][newY]])
      }
    }
  }

  return -1

  function inArea(x: number, y: number): boolean {
    return x >= 0 && x < Rows && y >= 0 && y < Cols
  }
};
// @lc code=end

console.log(swimInWater([[0, 2], [1, 3]]))
console.log(swimInWater([[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]))