/*
 * @lc app=leetcode.cn id=452 lang=typescript
 *
 * [452] 用最少数量的箭引爆气球
 */

//参考--类LIS问题--区间问题

// @lc code=start
function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) return 0
  const Len = points.length
  const dp = Int16Array.from({ length: Len }, (v, k) => 1)
  points.sort((a, b) => a[1] - b[1])
  let res = 1
  for (let i = 0; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      if (points[i][0] > points[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
        res = Math.max(res, dp[i])
      }
    }
  }

  return res
};
// @lc code=end

findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])