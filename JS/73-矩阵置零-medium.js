/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * 自己--秒杀
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  if (matrix.length === 0) return
  let m = matrix.length
  let n = matrix[0].length
  let list = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        list.push([i, j])
      }
    }
  }
  while (list.length > 0) {
    let curr = list.shift()
    row(curr[0])
    col(curr[1])
  }
  function row(i) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0
    }
  }
  function col(j) {
    for (let i = 0; i < m; i++) {
      matrix[i][j] = 0
    }
  }
  return
}
// @lc code=end
setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
])
