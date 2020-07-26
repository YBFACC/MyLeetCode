/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 */

// @lc code=start
/**
 * 参考--拓扑排序
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  if (matrix.length === 0) return 0
  const row = matrix.length
  const col = matrix[0].length
  const level = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => 0)
  )
  let res = 0
  const queue = []
  const ways = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      for (const [row_way, col_way] of ways) {
        const _row = i + row_way
        const _col = j + col_way
        if (
          _row < 0 ||
          _row >= row ||
          _col < 0 ||
          _col >= col ||
          matrix[_row][_col] <= matrix[i][j]
        ) {
          continue
        }
        level[i][j]++
      }
      if (level[i][j] === 0) queue.push([i, j])
    }
  }

  while (queue.length > 0) {
    res++
    let size = queue.length
    while (size > 0) {
      const [i, j] = queue.shift()
      for (const [row_way, col_way] of ways) {
        const _row = i + row_way
        const _col = j + col_way
        if (
          _row < 0 ||
          _row >= row ||
          _col < 0 ||
          _col >= col ||
          matrix[_row][_col] >= matrix[i][j]
        ) {
          continue
        }
        level[_row][_col]--
        if (level[_row][_col] === 0) queue.push([_row, _col])
      }
      size--
    }
  }

  return res
}
// @lc code=end

longestIncreasingPath([
  [7, 8, 9],
  [9, 7, 6],
  [7, 2, 3]
])
