/*
 * @lc app=leetcode.cn id=413 lang=typescript
 *
 * [413] 等差数列划分
 */

// @lc code=start
//参考官方--dp[i]代表等差数列最后一位
//res+=++dp[i]
function numberOfArithmeticSlices(A: number[]): number {
  const Len = A.length
  const dp = new Int32Array(Len)
  let res = 0
  dp[0] = 0
  dp[1] = 0
  for (let i = 2; i < Len; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp[i] = dp[i - 1] + 1
    } else {
      dp[i] = 0
    }
    res += dp[i]
  }
  return res
};
// @lc code=end

numberOfArithmeticSlices([1, 2, 3, 4])