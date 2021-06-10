/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

//提示--dp注意循环次序
//颠倒会出现：2-2-1，2-1-2这样的重复排序

// @lc code=start
function change(amount: number, coins: number[]): number {
  const list = Array.from({ length: amount + 1 }, () => 0)
  list[0] = 1
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      list[i] += list[i - coin]
    }
  }

  return list[amount]
};
// @lc code=end

change(5, [1, 2, 5])