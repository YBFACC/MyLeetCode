/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

//自己--旋转数组经典题--分类讨论-双指针

// @lc code=start
function findMin(nums: number[]): number {
  let res = nums[0]
  let left = 0, right = nums.length - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] < nums[0]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
    res = Math.min(res, nums[mid], nums[left], nums[right])
  }
  return res
};
// @lc code=end

console.log(findMin([4, 5, 6, 7, 0, 1, 2]))