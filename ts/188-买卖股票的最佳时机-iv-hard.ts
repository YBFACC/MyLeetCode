/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
//参考--如果k/2>总长度就失去限制意义
//空间复杂度为on*k,时间为ok*n^2
function maxProfit(k: number, prices: number[]): number {
  if (k === 0 || prices.length < 2) return 0

  if (Math.max(k / 2) > prices.length) return maxProfitInfiK(prices)

  const dp = [new Array(k + 1).fill(0)]

  for (let i = 1; i < prices.length; i++) {
    const currFloor = dp[dp.length - 1].slice()
    for (let j = 1; j <= i; j++) {
      let curr = prices[i] - prices[j - 1]
      currFloor[1] = Math.max(currFloor[1], curr)
      if (j - 2 >= 0) {
        let index = 2
        const preFloor = dp[j - 2]
        while (index < currFloor.length) {
          currFloor[index] = Math.max(
            preFloor[index - 1] + curr,
            preFloor[index],
            currFloor[index]
          )
          index++
        }
      }
    }
    dp.push(currFloor)
  }
  return Math.max(0, ...dp[dp.length - 1])
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
