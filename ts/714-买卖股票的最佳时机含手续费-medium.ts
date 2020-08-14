/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start

/*参考--o1空间--累积卖出的最大值和买入的最大值
 *在卖出时，减去手续费
 *https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/si-chong-shi-xian-tu-jie-714-mai-mai-gu-piao-de-zu/
 */
function maxProfit(prices: number[], fee: number): number {
  let buy = 0
  let sell = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    buy = Math.max(buy, sell + prices[i] - fee)
    sell = Math.max(sell, buy - prices[i])
  }
  return Math.max(buy, sell)
}
// @lc code=end

maxProfit([1, 3, 2, 8, 4, 9], 2)
