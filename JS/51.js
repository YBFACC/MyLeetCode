/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  var res = []
  const temp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => '.')
  )
  const col = Array.from({ length: n }, () => false)
  const diagLeft = Array.from({ length: 2 * n - 1 }, () => false)
  const diagRight = Array.from({ length: 2 * n - 1 }, () => false)

  var func = function(temp, row) {
    if (row === n) {
      res.push(temp.map(row=>row.join("")))
      return
    }
    for (let i = 0; i < n; i++) {
      let l = row + i
      let r = i - row + n - 1
      if (!col[i] && !diagLeft[l] && !diagRight[r]) {
        col[i] = diagLeft[l] = diagRight[r] = true
        temp[row][i] = 'Q'
        func(temp, row + 1)
        temp[row][i] = '.'
        col[i] = diagLeft[l] = diagRight[r] = false
      }
    }
  }
  func(temp, 0)
  return res
}

solveNQueens(4)
