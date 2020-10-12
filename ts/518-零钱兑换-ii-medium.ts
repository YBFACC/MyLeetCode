/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
//参考--dp--排列数与组合数的区别
function change(amount: number, coins: number[]): number {
  const dp = Array.from({ length: amount + 1 }, () => 0)
  dp[0] = 1
  for (const coin of coins) {
    for (let i = 0; i <= amount; i++) {
      if (coin <= i)
        dp[i] += dp[i - coin]
    }
  }
  return dp[amount]
};
// @lc code=end

console.log(change(5, [1, 2, 5]))
change(500
  , [3, 5, 7, 8, 9, 10, 11])


console.log(change(10, [10]))

console.log(change(3, [2]))
