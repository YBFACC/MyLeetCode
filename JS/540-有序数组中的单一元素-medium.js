/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * 自己--二分
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (nums.length === 0) return null
  let left = 0
  let right = nums.length - 1
  while (left <= right) {

    if (left === right) return nums[left]

    let mid = (left + right) >> 1
    if (nums[mid] === nums[mid - 1]) {
      if ((mid - left - 1) % 2 === 1) {
        right = mid - 2
      } else {
        left = mid + 1
      }
    } else if (nums[mid] === nums[mid + 1]) {
      if ((right - mid - 1) % 2 === 1) {
        left = mid + 2
      } else {
        right = mid - 1
      }
    } else {
      return nums[mid]
    }
  }
}
// @lc code=end

singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])
