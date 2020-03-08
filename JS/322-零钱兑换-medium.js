/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start

/**
 * 参考--dp--性能一般
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
  let dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i])
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
// @lc code=end

/**
 * 自己--贪心--不可靠
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  coins.sort((a, b) => b - a)
  let res = -1
  const func = function(list, sum) {
    if (res !== -1) return
    if (sum === amount) {
      res = list.length
    }
    for (let i = 0; i < coins.length; i++) {
      if (sum + coins[i] > amount) continue
      sum += coins[i]
      list.push(coins[i])
      func(list, sum)
      sum -= coins[i]
      list.pop()
    }
  }
  func([], 0)
  return res
}
