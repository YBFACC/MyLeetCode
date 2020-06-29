/**
 * 自己--类似机器人走路
 * @param {number[][]} grid
 * @return {number}
 */

var maxValue = function (grid) {
  if (grid.length === 0) return []
  let n = grid.length
  let m = grid[0].length

  let list = []

  for (let i = 0; i < n; i++) {
    list.push(grid[i].slice())
  }

  for (let i = 1; i < m; i++) {
    list[0][i] = list[0][i - 1] + grid[0][i]
  }
  for (let i = 1; i < n; i++) {
    list[i][0] = list[i - 1][0] + grid[i][0]
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      list[i][j] = Math.max(list[i][j - 1], list[i - 1][j]) + grid[i][j]
    }
  }
  return list[n - 1][m - 1]
}

console.log(
  maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
)
