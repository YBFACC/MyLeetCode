/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 */

// @lc code=start
/**
 * 自己--DFS超时
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  if (matrix.length === 0) return 0
  const row = matrix.length
  const col = matrix[0].length
  let res = 1
  const set = new Set()
  let ways = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const str = i + ',' + j
      set.add(str)
      _longestIncreasingPath(i, j, 1)
      set.delete(str)
    }
  }

  function _longestIncreasingPath(i, j, deepth) {
    res = Math.max(res, deepth)

    for (const [row_way, col_way] of ways) {
      const _row = i + row_way
      const _col = j + col_way
      const _str = _row + ',' + _col
      if (
        _row < 0 ||
        _row >= row ||
        _col < 0 ||
        _col >= col ||
        set.has(_str) ||
        matrix[_row][_col] <= matrix[i][j]
      ) {
        continue
      }
      set.add(_str)
      _longestIncreasingPath(_row, _col, deepth + 1)
      set.delete(_str)
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
