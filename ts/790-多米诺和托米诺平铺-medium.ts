/*
 * @lc app=leetcode.cn id=790 lang=typescript
 *
 * [790] 多米诺和托米诺平铺
 */

// @lc code=start
//参考--dp--找到递推式
// dp[0][0]代表对于当前列，上方不铺，下方不铺的情况数
// dp[0][1]代表对于当前列，上方不铺，下方铺的情况数
// dp[1][0]代表对于当前列，上方铺，下方不铺的情况数
// dp[1][1]代表对于当前列，上方铺，下方铺的情况数

function numTilings(N: number): number {
  const mod = 1000000007
  const Len = N
  let dp = [1, 0, 0, 1]
  for (let i = 2; i <= Len; i++) {
    const dp00 = dp[3]
    const dp01 = dp[0] + dp[2]
    const dp10 = dp[0] + dp[1]
    const dp11 = dp[0] + dp[1] + dp[2] + dp[3]
    dp = [dp00 % mod, dp01 % mod, dp10 % mod, dp11 % mod]
  }

  return dp[3]
};
// @lc code=end

numTilings(3)