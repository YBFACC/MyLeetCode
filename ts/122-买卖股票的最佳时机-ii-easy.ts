/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

//参考--dp

// @lc code=start
function maxProfit(prices: number[]): number {
  const Len = prices.length
  if (Len < 2) return 0
  const hold = Array.from({ length: Len }, () => 0)
  const no_hold = Array.from({ length: Len }, () => 0)
  hold[0] = -prices[0]
  no_hold[0] = 0
  for (let i = 1; i < Len; i++) {
    hold[i] = Math.max(hold[i - 1], no_hold[i - 1] - prices[i])
    no_hold[i] = Math.max(no_hold[i - 1], hold[i - 1] + prices[i])
  }
  return no_hold[Len - 1]
};
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))