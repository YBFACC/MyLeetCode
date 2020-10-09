//参考--每行的连续1
//➞ ↑
function numSubmat(mat: number[][]): number {
  const rowLen = mat.length
  const colLen = mat[0].length
  const dp = Array.from({ length: rowLen }, () =>
    Array.from({ length: colLen }, () => 0))
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (j == 0) {
        dp[i][j] = mat[i][j]
      } else if (mat[i][j] !== 0) {
        dp[i][j] = dp[i][j - 1] + 1
      } else {
        dp[i][j] = 0
      }
    }
  }
  let res = 0
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      let curr = dp[i][j]
      for (let k = i; k >= 0 && curr > 0; k--) {
        curr = Math.min(curr, dp[k][j])
        res += curr
      }
    }
  }

  return res
};