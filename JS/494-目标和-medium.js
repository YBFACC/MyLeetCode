/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 *参考--2维dp不会--性能好
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let dp = Array.from({ length: nums.length }, _ => new Object())
  if (nums[0] === 0) {
    dp[0][0] = 2
  } else {
    dp[0][nums[0]] = 1
    dp[0][-nums[0]] = 1
  }
  for (let i = 1; i < nums.length; i++) {
    for (let key in dp[i - 1]) {
      dp[i][~~key + nums[i]] = (dp[i][~~key + nums[i]] || 0) + dp[i - 1][key]
      dp[i][~~key - nums[i]] = (dp[i][~~key - nums[i]] || 0) + dp[i - 1][key]
    }
  }
  return dp[nums.length - 1][S] || 0
}
// @lc code=end
findTargetSumWays([1000], 1000)
