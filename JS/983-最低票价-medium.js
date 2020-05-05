/*
 * @lc app=leetcode.cn id=983 lang=javascript
 *
 * [983] 最低票价
 */

// @lc code=start
/**
 * 自己--一维dp就可以了
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let dp = new Array(days.length + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i < days.length; i++) {
    let curr = days[i]
    for (let j = 0; j < costs.length; j++) {
      let piao_day
      if (j === 0) {
        piao_day = 1
      } else if (j === 1) {
        piao_day = 7
      } else {
        piao_day = 30
      }
      let index = i + 1
      while (curr + piao_day > days[index - 1]) {
        dp[index] = Math.min(dp[i] + costs[j], dp[index])
        index++
      }
    }
  }
  return dp[days.length]
}
// @lc code=end

console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]))
