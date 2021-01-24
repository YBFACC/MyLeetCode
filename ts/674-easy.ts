/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

//提示--easy

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  const Len = nums.length
  if (Len === 0) return 0
  let res = 1
  let temp = 1
  for (let i = 1; i < Len; i++) {
    if (nums[i - 1] >= nums[i]) {
      temp = 1
      continue
    }
    temp++
    res = Math.max(res, temp)
  }
  return res
};
// @lc code=end

findLengthOfLCIS([2, 2, 2, 2, 2])