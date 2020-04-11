/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * 同面试04-240题
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length < 1) return false
  let row = matrix.length
  let col = matrix[0].length
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] > target) {
      break
    } else if (matrix[i][0] === target) {
      return true
    }
    for (let j = 0; j < col; j++) {
      if (matrix[0][j] > target) {
        break
      } else if (matrix[0][j] === target) {
        return true
      }
      if (matrix[i][j] === target) {
        return true
      }
    }
  }
  return false
}
// @lc code=end
