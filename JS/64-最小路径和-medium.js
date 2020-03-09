/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * 自己--跟62,63有点像--性能一般
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid[0].length
  let n = grid.length
  if (m === 1 && n === 1) return grid[0][0]
  let list = Array.from({ length: n }, _ =>
    Array.from({ length: m }, _ => Infinity)
  )
  list[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    list[0][i] = list[0][i - 1] + grid[0][i]
  }
  for (let i = 1; i < n; i++) {
    list[i][0] = list[i - 1][0] + grid[i][0]
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      let temp = Math.min(list[i][j - 1], list[i - 1][j])
      list[i][j] = temp + grid[i][j]
    }
  }
  return list[n - 1][m - 1]
}
// @lc code=end
minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
])
