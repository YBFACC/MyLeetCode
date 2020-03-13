/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * 自己--dp记录当前有几个数小于自己--性能差
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0
  let dp = {}
  dp[nums[0]] = 0
  let res = 0
  for (let i = 1; i < nums.length; i++) {
    let index = nums[i]
    dp[nums[i]] = 0
    for (const [key, value] of Object.entries(dp)) {
      if (key < index) {
        dp[nums[i]] = Math.max(dp[nums[i]], value + 1)
        res = Math.max(res, dp[nums[i]])
      }
    }
  }
  return res + 1
}
// @lc code=end
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
