/*
 * @lc app=leetcode.cn id=368 lang=typescript
 *
 * [368] 最大整除子集
 */

//参考--dp记录集合最长长度
//

// @lc code=start
function largestDivisibleSubset(nums: number[]): number[] {
  if (nums.length <= 1) return nums
  const Len = nums.length, dp = Array.from({ length: Len }, () => 1)
  nums.sort((a, b) => a - b)
  let maxSize = 1, maxVal = dp[0]
  for (let i = 1; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
      if (dp[i] > maxSize) {
        maxSize = dp[i]
        maxVal = nums[i]
      }
    }
  }
  const res = []
  if (maxSize === 1) {
    res.push(nums[0])
    return res
  }
  for (let i = Len - 1; i >= 0 && maxSize > 0; i--) {
    if (dp[i] === maxSize && maxVal % nums[i] === 0) {
      res.push(nums[i])
      maxVal = nums[i]
      maxSize--
    }
  }
  return res
};
// @lc code=end

largestDivisibleSubset([2, 4, 7, 8, 9, 12, 16, 18])