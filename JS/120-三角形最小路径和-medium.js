/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * 自己--dp--性能差
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle.length === 0) return 0
  if (triangle.length === 1) return triangle[0][0]
  let dp = Array.from({ length: triangle.length }, (v, k) =>
    Array.from({ length: k + 1 }, _ => Infinity)
  )
  dp[0][0] = triangle[0][0]
  let res = Infinity
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let up1 = dp[i - 1][j - 1] === undefined ? Infinity : dp[i - 1][j - 1]
      let up2 = dp[i - 1][j] === undefined ? Infinity : dp[i - 1][j]
      let temp = Math.min(up1, up2)
      dp[i][j] = triangle[i][j] + (temp === Infinity ? 0 : temp)
      if (i === triangle.length - 1) {
        res = Math.min(res, dp[i][j])
      }
    }
  }

  return res
}
// @lc code=end
