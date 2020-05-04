/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * 自己--dp--性能差
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length < 2) return 0
  let dp = new Array(nums.length + 1).fill(Infinity)
  dp[0] = 0
  dp[1] = 0
  for (let i = 0; i < nums.length; i++) {
    let step = nums[i]
    for (let j = i + 2; j <= i + step + 1 && j < dp.length; j++) {
      dp[j] = Math.min(dp[j], dp[i + 1] + 1)
    }
  }
  return dp[nums.length]
}
// @lc code=end

console.log(jump([2,3,1,1,4]))
