/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
//参考--降维-改倒序
function maxProfit(k: number, prices: number[]): number {
  if (k === 0 || prices.length < 2) return 0

  if (Math.max(k / 2) > prices.length) return maxProfitInfiK(prices)

  const Len = prices.length
  const dp = Array.from({ length: k + 1 }, () =>
    Array.from({ length: 2 }, () => 0)
  )

  //初始化
  for (let i = 0; i <= k; i++) {
    dp[i][1] = -prices[0]
  }
  for (let i = 1; i < Len; i++) {
    for (let j = k; j > 0; j--) {
      //处理第k次卖出
      dp[j][0] = Math.max(dp[j][0], dp[j][1] + prices[i])
      //处理第k次买入
      dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - prices[i])
    }
  }
  return dp[k][0]
}

function maxProfitInfiK(prices: number[]): number {
  if (!prices.length) return 0
  let dp_i_0 = 0
  let dp_i_1 = -Infinity
  let n = prices.length
  for (let i = 0; i < prices.length; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, temp - prices[i])
  }
  return dp_i_0
}

// @lc code=end

console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]))
