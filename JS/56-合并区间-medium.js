/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * 自己--先排序方便处理--性能一般
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  let res = []
  let left = intervals[0][0]
  let right = intervals[0][1]
  intervals.shift()
  while (intervals.length > 0) {
    let curr = intervals.shift()
    if (curr[0] <= right) {
      right = Math.max(right, curr[1])
      continue
    } else {
      res.push([left, right])
      left = curr[0]
      right = curr[1]
    }
  }
  res.push([left, right])
  return res
}
// @lc code=end

merge([
  [1, 4],
  [2, 3],
])
