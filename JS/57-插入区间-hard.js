/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * 自己--插入--排序--贪心
 * res中的右值大于等于当前item的左值=>进行区间合并
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0])

  if (intervals.length <= 1) return intervals

  const res = []

  for (let i = 0; i < intervals.length; i++) {
    if (res.length > 0 && intervals[i][0] <= res[res.length - 1][1]) {
      let min = Math.min(intervals[i][0], res[res.length - 1][0])
      let max = Math.max(intervals[i][1], res[res.length - 1][1])
      res.pop()
      res.push([min, max])
    } else {
      res.push(intervals[i])
    }
  }

  return res
}
// @lc code=end

insert([[1, 2]], [3, 6])
