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
rob([2, 7, 9, 3, 1])
