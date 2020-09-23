/*
 * @lc app=leetcode.cn id=931 lang=typescript
 *
 * [931] 下降路径最小和
 */
//自己--dp--感觉可以优化空间
// @lc code=start
function minFallingPathSum(A: number[][]): number {
  const Len = A.length
  const floor = A[0].length
  const list = Array.from({ length: Len }, () =>
    Array.from({ length: floor }, () => Infinity))

  for (let i = 0; i < floor; i++) {
    list[Len - 1][i] = A[Len - 1][i]
  }
  for (let i = Len - 2; i >= 0; i--) {
    for (let j = 0; j < floor; j++) {
      const l = j - 1
      const k = j + 1
      if (l >= 0) {
        list[i][j] = Math.min(list[i][j], list[i + 1][l] + A[i][j])
      }
      list[i][j] = Math.min(list[i][j], list[i + 1][j] + A[i][j])

      if (k < floor) {
        list[i][j] = Math.min(list[i][j], list[i + 1][k] + A[i][j])
      }
    }
  }
  let res = Infinity
  for (let i = 0; i < floor; i++) {
    res = Math.min(res, list[0][i])
  }

  return res
};
// @lc code=end

minFallingPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])