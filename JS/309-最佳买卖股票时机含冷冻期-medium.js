/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * 自己--二维dp过
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = Array.from({ length: prices.length + 1 }, () =>
    Array.from({ length: prices.length + 2 }, () => 0)
  )
  for (let i = 1; i <= prices.length; i++) {
    let before = dp[i - 1][i - 1]
    for (let j = 2; j <= i + 1; j++) {
      dp[i][j] = dp[i - 1][j]
    }
    for (let j = i + 2; j <= prices.length + 1; j++) {
      dp[i][j] = Math.max(
        before + prices[j - 2] - prices[i - 1],
        dp[i - 1][j],
        dp[i][j - 1]
      )
    }
  }
  return dp[prices.length][prices.length + 1]
}
// @lc code=end
console.log(maxProfit([1, 2, 3, 0, 2]))
