/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * 自己--先左->右，再上->下计算1的数量-我用的类62题-性能差-可以用效率更高的dp
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function(matrix) {
  const col = function(range, i, j) {
    let count = range
    for (let x = i - range + 1; x < i; x++) {
      if (list[x][j].x < count) {
        let rows = i - x
        count = Math.max(rows, list[x][j].x)
      }
    }
    return count
  }
  if (matrix.length === 0) return 0
  if (matrix.length === 1) {
    if (matrix[0].includes('1')) {
      return 1
    } else {
      return 0
    }
  }
  let list = Array.from({ length: matrix.length }, _ =>
    Array.from({ length: matrix[0].length })
  )
  let res = 0
  for (let i = 0; i < matrix.length; i++) {
    let count = 0
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] === '0' ? (count = 0) : count++
      list[i][j] = { x: count }
      if (count !== 0 && res !== 1) {
        res = 1
      }
    }
  }
  for (let j = 0; j < matrix[0].length; j++) {
    let count = 0
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][j] === '0' ? (count = 0) : count++
      list[i][j].y = count
      if (list[i][j].x > 1 && list[i][j].y > 1) {
        let range = Math.min(list[i][j].x, list[i][j].y)
        res = Math.max(res, col(range, i, j))
      }
    }
  }
  return res * res
}
// @lc code=end
maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0']
])
