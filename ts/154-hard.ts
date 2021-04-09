/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

//自己--递归-双指针

// @lc code=start
function findMin(nums: number[]): number {
  if (nums.length === 0) return Infinity
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return nums[0] > nums[1] ? nums[1] : nums[0]
  let res = nums[0]
  let left = 0, right = nums.length - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] === nums[0]) {
      const l = findMin(nums.slice(left, mid))
      const r = findMin(nums.slice(mid + 1, right + 1))
      return l >= r ? r : l
    } else if (nums[mid] < nums[0]) {
      //保留右值，右值小于nums[0],它可能是结果不能舍去
      right = mid
    } else {
      //舍去左值，左值大于nums[0],它不可能是结果
      left = mid + 1
    }
    res = Math.min(res, nums[mid], nums[left], nums[right])
  }
  return res                                                                                                                                                                                                                                                                                                                                                                                                                                       
};
// @lc code=end

console.log(findMin([10, 10, 10, 10, 10]))

console.log(findMin([1, 3, 1, 1]))