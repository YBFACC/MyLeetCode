/**
 * 参考--关键是斜向的处理--回溯
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = []
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => '.')
  )

  const col = Array.from({ length: n }, () => false)
  const row_d = {}
  const col_d = {}

  const dfs = function (row) {
    if (row === n) {
      res.push(dp.map(item => item.join('')))
      return
    }

    for (let j = 0; j < n; j++) {
      if (col[j]) continue
      let r_d = row + j
      let c_d = row - j
      if (!row_d[r_d] && !col_d[c_d]) {
        row_d[r_d] = true
        col_d[c_d] = true
        col[j] = true
        dp[row][j] = 'Q'
        dfs(row + 1)
        dp[row][j] = '.'
        col[j] = false
        row_d[r_d] = false
        col_d[c_d] = false
      }
    }
  }
  dfs(0)

  return res
}

solveNQueens(4)
