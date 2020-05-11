/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * 自己--线性抽奖
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length < 2) return 0

  if (nums[0] > nums[1]) {
    return 0
  }

  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1
  }
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i
    }
  }
}
// @lc code=end

/**
 * 参考--二分查找
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length < 2) return 0
  if (nums[0] > nums[1]) {
    return 0
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1
  }

  let left = 0
  let right = nums.length - 1
  const BinarySearch = function (left, right) {
    if (left >= right) {
      return left
    }
    let mid = left + ((right - left) >> 1)
    if (nums[mid] > nums[mid + 1]) {
      return BinarySearch(left, mid)
    } else {
      return BinarySearch(mid + 1, right)
    }
  }
  return BinarySearch(left, right)
}
