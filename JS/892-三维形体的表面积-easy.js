/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * 参考--题目难懂--性能好
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let res = 0
  const func = function(i, j) {
    if (grid[i][j] === 0) {
      return
    } else {
      let all = 6 * grid[i][j]
      if (i > 0) {
        all -= Math.min(grid[i - 1][j], grid[i][j])
      }
      if (i < grid.length - 1) {
        all -= Math.min(grid[i + 1][j], grid[i][j])
      }
      if (j > 0) {
        all -= Math.min(grid[i][j - 1], grid[i][j])
      }
      if (j < grid[0].length-1) {
        all -= Math.min(grid[i][j + 1], grid[i][j])
      }
      if (grid[i][j] > 1) {
        all -= (grid[i][j] - 1) * 2
      }
      res += all
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      func(i, j)
    }
  }
  return res
}
// @lc code=end

surfaceArea([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
])
