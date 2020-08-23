/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * 降低空间到O1
 * java 时间n^2过不了，js可以，js创建空间时耗高
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0
  const Len = prices.length

  let dp0 = 0
  let dp1 = -prices[0]
  let dp2 = 0
  let dp3 = -prices[0]
  let dp4 = 0

  for (let i = 1; i < Len; i++) {
    //第一次买入：从初始状态转换而来，或者第一次买入后保持不动
    dp1 = Math.max(dp1, dp0 - prices[i])
    //第一次卖出：从第一次买入转换而来，或者第一次卖出后保持不动
    dp2 = Math.max(dp2, dp1 + prices[i])
    //第二次买入：从第一次卖出转换而来，或者第二次买入后保持不动
    dp3 = Math.max(dp3, dp2 - prices[i])
    //第二次卖出：从第二次买入转换而来，或者第二次卖出后保持不动
    dp4 = Math.max(dp4, dp3 + prices[i])
  }

  return Math.max(dp0, dp1, dp2, dp3, dp4)
}
// @lc code=end

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
