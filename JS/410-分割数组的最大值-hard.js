/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * 参考--dp解法
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  const n = nums.length
  let dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => Infinity)
  )

  let sub = [0]
  for (let i = 0; i < n; i++) {
    sub[i + 1] = sub[i] + nums[i]
  }

  dp[0][0] = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, m); j++) {
      for (let k = 0; k < i; k++) {
        dp[i][j] = Math.min(dp[i][j], Math.max(sub[i] - sub[k], dp[k][j - 1]))
      }
    }
  }

  return dp[n][m]
}
// @lc code=end

splitArray([7, 2, 5, 10, 8], 2)
