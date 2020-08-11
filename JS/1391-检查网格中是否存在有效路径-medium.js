/*
 * @lc app=leetcode.cn id=1391 lang=javascript
 *
 * [1391] 检查网格中是否存在有效路径
 */

// @lc code=start
/**
 * 参考--DFS--注意方向的表示
 * @param {number[][]} grid
 * @return {boolean}
 */

var hasValidPath = function (grid) {
  if (grid.length === 0) return false
  if (grid.length === 1 && grid[0].length === 1) return true
  const canWays = [
    null,
    [[], [1, 3, 5], [], [1, 4, 6]],
    [[2, 3, 4], [], [2, 5, 6], []],
    [[], [], [5, 6, 2], [1, 4, 6]],
    [[], [1, 3, 5], [2, 5, 6], []],
    [[2, 3, 4], [], [], [1, 4, 6]],
    [[2, 3, 4], [1, 3, 5], [], []]
  ]

  const rowLimit = grid.length
  const colLimit = grid[0].length

  const directs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]
  const visited = Array.from({ length: rowLimit }, () =>
    Array.from({ length: colLimit }, () => false)
  )

  const queue = [[0, 0]]
  visited[0][0] = true

  while (queue.length > 0) {
    const [row, col] = queue.shift()
    if (row === rowLimit - 1 && col === colLimit - 1) {
      return true
    }

    const curr = grid[row][col]
    const ways = canWays[curr]

    for (let i = 0; i < directs.length; i++) {
      const newRow = directs[i][0] + row
      const newCol = directs[i][1] + col
      if (
        newRow < 0 ||
        newRow >= rowLimit ||
        newCol < 0 ||
        newCol >= colLimit ||
        visited[newRow][newCol] ||
        ways[i].length === 0
      )
        continue

      const nextVal = grid[newRow][newCol]
      if (!ways[i].includes(nextVal)) continue
      visited[row][col] = true
      queue.push([newRow, newCol])
    }
  }

  return false
}

// @lc code=end

console.log(
  hasValidPath([
    [2, 4, 3],
    [6, 5, 2]
  ])
)
