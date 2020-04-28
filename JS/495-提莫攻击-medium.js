/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * 自己--能量走路题--效率高
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0 || duration === 0) return 0
  let curr = timeSeries[0] + duration
  let res = 0
  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] >= curr) {
      res += duration
    } else {
      res += timeSeries[i] - timeSeries[i - 1]
    }
    curr = timeSeries[i] + duration
  }
  res += duration
  return res
}
// @lc code=end
