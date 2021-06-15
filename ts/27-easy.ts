/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

//提示--双指针

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let left = 0, right = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      right++
      continue
    }
    nums[left++] = nums[right++]
  }
  return left
};
// @lc code=end

