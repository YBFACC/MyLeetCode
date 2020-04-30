/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * 自己--dp[i] = Math.min(dp[i - temp] + 1, dp[i])
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let list = [1]
  for (let i = 2; i * i <= n; i++) {
    list.push(i * i)
  }
  let dp = Array.from({ length: n + 1 }, _ => Infinity)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3
  dp[4] = 1
  for (let i = 5; i <= n; i++) {
    for (let j = 0; list[j] <= i; j++) {
      let temp = list[j]
      dp[i] = Math.min(dp[i - temp] + 1, dp[i])
    }
  }
  return dp[n]
}
// @lc code=end
numSquares(13)
