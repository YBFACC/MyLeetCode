/*
 * @lc app=leetcode.cn id=1391 lang=typescript
 *
 * [1391] 检查网格中是否存在有效路径
 */

// @lc code=start
//自己--练习ts
function hasValidPath(grid: number[][]): boolean {
  const rowLimit: number = grid.length
  const colLimit: number = grid[0].length

  const visited: Array<Array<boolean>> = Array.from({ length: rowLimit }, () =>
    Array.from({ length: colLimit }, () => false)
  )
  const canWays: Array<Array<Array<number>>> = [
    [[], [], [], []],
    [[], [1, 3, 5], [], [1, 4, 6]],
    [[2, 3, 4], [], [2, 5, 6], []],
    [[], [], [5, 6, 2], [1, 4, 6]],
    [[], [1, 3, 5], [2, 5, 6], []],
    [[2, 3, 4], [], [], [1, 4, 6]],
    [[2, 3, 4], [1, 3, 5], [], []]
  ]
  const directs: Array<Array<number>> = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]
  let res: boolean = false
  visited[0][0] = true
  const queue: Array<Array<number>> = [[0, 0]]
  while (queue.length > 0) {
    const [row, col] = queue.shift() as Array<number>
    if (row === rowLimit - 1 && col === colLimit - 1) return true

    const curr: number = grid[row][col]
    const ways: Array<Array<number>> = canWays[curr]

    for (let i = 0; i < directs.length; i++) {
      const newRow: number = directs[i][0] + row
      const newCol: number = directs[i][1] + col
      if (
        newRow < 0 ||
        newRow >= rowLimit ||
        newCol < 0 ||
        newCol >= colLimit ||
        visited[newRow][newCol] ||
        ways[i].length === 0
      )
        continue
      const nextVal: number = grid[newRow][newCol]
      if (ways[i].indexOf(nextVal) === -1) continue
      visited[row][col] = true
      queue.push([newRow, newCol])
    }
  }
  return res
}
// @lc code=end
