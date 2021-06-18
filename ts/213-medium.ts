/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

//自己--dp2次
//0～len-1
//1～len

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  const Len = nums.length
  const dp1 = Array.from({ length: Len - 1 }, () => 0)
  dp1[0] = nums[0]
  dp1[1] = Math.max(nums[1], nums[0])
  for (let i = 2; i < Len - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i])
  }

  const dp2 = Array.from({ length: Len - 1 }, () => 0)
  dp2[0] = nums[1]
  dp2[1] = Math.max(nums[1], nums[2])
  for (let i = 2; i < Len - 1; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i + 1])
  }

  return Math.max(dp1[Len - 2], dp2[Len - 2])
};
// @lc code=end

console.log(rob([1, 3, 1, 3, 100]))

console.log(rob([2, 3, 2]))