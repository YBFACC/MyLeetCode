/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * 参考--dp理解不够--性能一般
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var combinationSum4 = function(nums, target) {
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (i >= num) {
        dp[i] += dp[i - num]
      }
    }
  }
  return dp[target]
}

// @lc code=end
combinationSum4([2, 3, 5], 20)
