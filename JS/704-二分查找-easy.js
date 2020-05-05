/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * 自己--二分
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const func = function (left, right) {
    if (left > right) return -1
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      return func(left, mid - 1)
    } else {
      return func(mid + 1, right)
    }
  }
  return func(0, nums.length - 1)
}
// @lc code=end
