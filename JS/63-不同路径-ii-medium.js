/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * 自己--改62题--性能一般
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid[0].length
  let n = obstacleGrid.length
  if (m === 1 && n === 1) {
    if (obstacleGrid[0][0] === 1) {
      return 0
    } else {
      return 1
    }
  }
  if (obstacleGrid[0][0] === 1) return 0
  let col = true
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[0][i] === 1) {
      obstacleGrid[0][i] = Infinity
      col = false
    } else {
      obstacleGrid[0][i] = col ? 1 : Infinity
    }
  }
  let row = true
  for (let i = 1; i < n; i++) {
    if (obstacleGrid[i][0] === 1) {
      obstacleGrid[i][0] = Infinity
      row = false
    } else {
      obstacleGrid[i][0] = row ? 1 : Infinity
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = Infinity
      }
      if (obstacleGrid[i][j - 1] !== Infinity) {
        obstacleGrid[i][j] += obstacleGrid[i][j - 1]
      }
      if (obstacleGrid[i - 1][j] !== Infinity) {
        obstacleGrid[i][j] += obstacleGrid[i - 1][j]
      }
    }
  }
  return obstacleGrid[n - 1][m - 1] === Infinity
    ? 0
    : obstacleGrid[n - 1][m - 1]
}
// @lc code=end
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])
)
