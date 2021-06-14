/*
 * @lc app=leetcode.cn id=740 lang=typescript
 *
 * [740] 删除与获得点数
 */

//参考--dp
//这题选中第i项，只与nums[i] - 1 和 nums[i] + 1有关
//与排列顺序无关

// @lc code=start
function deleteAndEarn(nums: number[]): number {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  const Len = nums.length
  let max = nums[0]
  for (let i = 0; i < Len; i++) {
    max = Math.max(max, nums[i])
  }
  const all = Array.from({ length: max + 1 }, () => 0)
  for (const item of nums) {
    all[item]++
  }
  const dp = Array.from({ length: max + 1 }, () => 0)
  dp[1] = all[1] * 1
  dp[2] = Math.max(dp[1], all[2] * 2)
  for (let i = 2; i <= max; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + i * all[i])
  }
  return dp[max]
};
// @lc code=end

deleteAndEarn([2, 2, 3, 3, 3, 4])
deleteAndEarn([3, 4, 2])