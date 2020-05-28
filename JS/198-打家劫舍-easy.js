/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * 自己--重做
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0
  let dp = [0, nums[0]]
  for (let i = 1; i < nums.length; i++) {
    ;[dp[0], dp[1]] = [dp[1], Math.max(dp[1], dp[0] + nums[i])]
  }
  return dp[1]
}
// @lc code=end

rob([2,7,9,3,1])

/**
 * 参考---动态规划--性能好
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var len = nums.length
  if (len === 0) return 0
  var dp = Array(len + 1)
  dp[0] = 0
  dp[1] = nums[0]
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
  }
  return dp[len]
}