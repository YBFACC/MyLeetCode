/*
 * @lc app=leetcode.cn id=435 lang=typescript
 *
 * [435] 无重叠区间
 */



//参考--重做--贪心
//固定一边--遍历叠加--类似射气球

// @lc code=start
var eraseOverlapIntervals = function (intervals: number[][]) {
  if (!intervals.length) {
    return 0;
  }
  intervals.sort((a, b) => a[1] - b[1])
  let right = intervals[0][1]
  let res = 1
  const Len = intervals.length
  for (let i = 1; i < Len; i++) {
    if (intervals[i][0] >= right) {
      res++
      right = intervals[i][1]
    }
  }

  return Len - res
};

// @lc code=end

eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])