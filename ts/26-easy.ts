/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

//参考--双指针


// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0
  let index = 0
  const Len = nums.length
  for (let i = 0; i < Len; i++) {
    if (nums[index] !== nums[i]) {
      //这还是简练
      index++
      nums[index] = nums[i]
    }
  }
  return index + 1
};
// @lc code=end

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])