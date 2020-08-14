/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start

/*参考--2维dp--累积卖出的最大值和买入的最大值
 *在卖出时，减去手续费
 *https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/si-chong-shi-xian-tu-jie-714-mai-mai-gu-piao-de-zu/
 */
function maxProfit(prices: number[], fee: number): number {
  const dp = Array.from({ length: prices.length }, () =>
    Array.from({ length: 2 }, () => -Infinity)
  )
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return Math.max(...dp[prices.length - 1])
}
// @lc code=end

maxProfit([1, 3, 2, 8, 4, 9], 2)
