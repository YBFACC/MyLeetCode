/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * 参考--二维dp-从下到上
 * nums[start] * nums[i] * nums[end]
 * start~i和i~end间的气球都被戳破了
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  if (nums.length === 0) return 0
  let dp = Array.from({ length: nums.length + 2 }, () =>
    Array.from({ length: nums.length + 2 }, () => 0)
  )
  nums = [1, ...nums, 1]

  for (let start = nums.length - 1; start >= 0; start--) {
    for (let end = start; end < nums.length; end++) {
      if (end - start < 2) continue

      for (let i = start + 1; i < end; i++) {
        dp[start][end] = Math.max(
          dp[start][end],
          dp[start][i] + dp[i][end] + nums[start] * nums[i] * nums[end]
        )
      }
    }
  }
  return dp[0][nums.length - 1]
}
// @lc code=end

maxCoins([3, 1, 5, 8])
