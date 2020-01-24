/**
 * copy---傻瓜4层循环法---性能可以
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  let rows = M.length,
    cols = M[0].length
  let res = []
  for (let i = 0; i < rows; i++) {
    res[i] = []
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let sum = 0,
        count = 0
      // m n 的范围判断 精髓
      for (let m = Math.max(0, i - 1); m <= Math.min(rows - 1, i + 1); m++) {
        for (let n = Math.max(0, j - 1); n <= Math.min(cols - 1, j + 1); n++) {
          sum += M[m][n]
          count++
        }
      }
      res[i][j] = Math.floor(sum / count)
    }
  }
  return res
}


