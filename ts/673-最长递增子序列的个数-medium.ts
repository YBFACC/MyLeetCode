/*
 * @lc app=leetcode.cn id=673 lang=typescript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
//参考--最长升序数量-count记录当前索引下最长的个数
function findNumberOfLIS(nums: number[]): number {
  const Len = nums.length
  if (Len <= 1) return Len
  const dp = Array.from({ length: Len }, () => 1)
  const count = Array.from({ length: Len }, () => 1)
  let res = 0
  let max_num = 1

  for (let i = 0; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 === dp[i]) {
          count[i] += count[j]
        } else if (dp[j] + 1 > dp[i]) {
          count[i] = count[j]
          dp[i] = dp[j] + 1
        }
      }
    }
    if (dp[i] === max_num) {
      res += count[i]
    } else if (dp[i] > max_num) {
      res = count[i]
      max_num = dp[i]
    }
  }

  return res
};
// @lc code=end

findNumberOfLIS([1, 3, 5, 4, 7])