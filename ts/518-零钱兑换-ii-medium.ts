/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
//自己--超时
function change(amount: number, coins: number[]): number {
  let res = 0
  coins.sort((a, b) => a - b)
  const Len = coins.length

  const dfs = function (index: number, sum: number): boolean {

    if (sum > amount) return
    if (sum === amount) {
      res++
      return
    }
    if (index < 0) return

    const item = coins[index]
    dfs(index - 1, sum)
    let temp = sum
    while (temp <= amount) {
      temp += item
      dfs(index - 1, temp)
    }

  }
  dfs(Len - 1, 0)

  return res
};
// @lc code=end

change(500
  , [3, 5, 7, 8, 9, 10, 11])

console.log(change(5, [1, 2, 5]))

console.log(change(10, [10]))

console.log(change(3, [2]))
