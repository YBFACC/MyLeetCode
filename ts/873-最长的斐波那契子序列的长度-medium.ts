/*
 * @lc app=leetcode.cn id=873 lang=typescript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
//参考--x1+x2=x3的dp-注意每次的步长
function lenLongestFibSubseq(A: number[]): number {
  const Len = A.length
  if (Len < 3) return 0
  //const dp = Array.from({ length: Len }, () => Int32Array.from({ length: Len }, () => 2))
  const dp = Array.from({ length: Len }, () => Array.from({ length: Len }, () => 2))
  const map = new Map()
  for (let i = 0; i < Len; i++) {
    map.set(A[i], i)
  }

  let res = 0

  for (let i = 0; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      const stride = A[i] - A[j]
      if (stride < A[j] && map.has(stride)) {
        //dp[5][3] = Math.max(dp[5][3], dp[3][2] + 1)
        dp[i][j] = Math.max(dp[i][j], dp[j][map.get(stride)] + 1)
        res = Math.max(res, dp[i][j])
      }
    }
  }
  return res
};
// @lc code=end

lenLongestFibSubseq([1,2,3,4,5,6,7,8])