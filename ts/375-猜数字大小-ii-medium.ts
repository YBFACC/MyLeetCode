/*
 * @lc app=leetcode.cn id=375 lang=typescript
 *
 * [375] 猜数字大小 II
 */

// @lc code=start
//参考--递归--memo
//自己搞错了i + dfs(l, i - 1)+ dfs(i + 1, r)
//应该变成i + Math.max(dfs(l, i - 1), dfs(i + 1, r))
//每一次应该选择两边的最大值，而不是相加。因为其中暗含二分，每一次猜测都会舍弃另一边，不用相加只需要取最大值
function getMoneyAmount(n: number): number {
  const memo = new Map()
  const dfs = function (l: number, r: number): number {
    const str = `${l},${r}`
    if (memo.has(str)) return memo.get(str)
    if (l === r) {
      memo.set(str, 0)
      return 0
    }
    if (l + 1 === r) {
      memo.set(str, l)
      return l
    }
    let min = Infinity
    for (let i = l; i <= r; i++) {
      min = Math.min(min, i + Math.max(dfs(l, i - 1), dfs(i + 1, r)))
    }

    memo.set(str, min)
    return min
  }
  let res = dfs(1, n)
  return res
}
// @lc code=end

getMoneyAmount(7)
