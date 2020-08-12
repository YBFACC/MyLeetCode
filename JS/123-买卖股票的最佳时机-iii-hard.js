/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * 自己--一维dp
 * dp[i]代表第i天之前第最大累积收益
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0
  const Len = prices.length
  const dp = Array.from({ length: Len }, () => 0)

  let res = 0
  for (let i = 1; i < Len; i++) {
    dp[i] = dp[i - 1]
    for (let j = 1; j <= i; j++) {
      const curr = prices[i] - prices[j - 1]
      res = Math.max(res, curr)
      dp[i] = Math.max(dp[i], curr)
      if (j - 2 >= 0) {
        res = Math.max(res, curr + dp[j - 2])
      }
    }
  }
  return res
}
// @lc code=end

