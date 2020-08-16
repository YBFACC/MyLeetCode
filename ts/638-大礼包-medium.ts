/*
 * @lc app=leetcode.cn id=638 lang=typescript
 *
 * [638] 大礼包
 */

// @lc code=start
//参考--回溯+memo
function shoppingOffers(
  price: number[],
  special: number[][],
  needs: number[]
): number {
  const memo = new Map()
  const dfs = function (need: number[]): number {
    const str = need.join(',')
    if (memo.has(str)) return memo.get(str)
    let min = dot(need, price)
    for (const sp of special) {
      let clone_needs = need.slice()
      let i = 0
      for (; i < clone_needs.length; i++) {
        if (clone_needs[i] >= sp[i]) {
          clone_needs[i] -= sp[i]
        } else {
          break
        }
      }
      if (i === need.length) {
        min = Math.min(min, sp[sp.length - 1] + dfs(clone_needs))
      }
    }
    memo.set(str, min)
    return min
  }
  return dfs(needs)
}
function dot(needs: number[], price: number[]): number {
  let sum = 0
  for (let i = 0; i < needs.length; i++) {
    sum += needs[i] * price[i]
  }
  return sum
}
// @lc code=end

console.log(
  shoppingOffers(
    [2, 3, 4],
    [
      [1, 1, 0, 4],
      [2, 2, 1, 9]
    ],
    [1, 2, 1]
  )
)
