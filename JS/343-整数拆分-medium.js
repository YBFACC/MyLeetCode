/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * ?_?
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let dp = Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      dp[i] = Math.max(Math.max(dp[j], j) * (i - j), dp[i])
    }
  }
  return dp[n]
}
// @lc code=end
integerBreak(2)
