/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * 学习他人思路
dp[i][0][0]：表示第i天交易了0次时卖出后的累计最大利润
dp[i][0][1]：表示第i天交易了0次时买入后的累计最大利润

dp[i][1][0]：表示第i天交易了1次时卖出后的累计最大利润
dp[i][1][1]：表示第i天交易了1次时买入后的累计最大利润

dp[i][2][0]：表示第i天交易了2次时卖出后的累计最大利润
dp[i][2][1]：表示第i天交易了2次时买入后的累计最大利润
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0
  const Len = prices.length
  const dp = Array.from({ length: Len }, () =>
    Array.from({ length: 3 }, () => Array.from({ length: 2 }, () => 0))
  )

  dp[0][0][1] = -prices[0]
  dp[0][1][1] = -prices[0]

  for (let i = 1; i < Len; ++i) {
    //第一次买入：从初始状态转换而来，或者第一次买入后保持不动
    dp[i][0][1] = Math.max(dp[i - 1][0][1], dp[i - 1][0][0] - prices[i])
    //第一次卖出：从第一次买入转换而来，或者第一次卖出后保持不动
    dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][0][1] + prices[i])
    //第二次买入：从第一次卖出转换而来，或者第二次买入后保持不动
    dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][1][0] - prices[i])
    //第二次卖出：从第二次买入转换而来，或者第二次卖出后保持不动
    dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][1][1] + prices[i])
  }

  return Math.max(
    dp[Len - 1][0][1],
    dp[Len - 1][1][0],
    dp[Len - 1][1][1],
    dp[Len - 1][2][0]
  )
}
// @lc code=end

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
