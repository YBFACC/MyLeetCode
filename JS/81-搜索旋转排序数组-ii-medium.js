/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * 自己--按情况递归解
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (nums.length === 0) return false
  if (nums.length === 1) return nums[0] === target
  if (nums[0] === target || nums[nums.length - 1] === target) return true
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] === target) {
      return true
    }
    if (nums[mid] > nums[nums.length - 1]) {
      if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        return (
          search(nums.slice(left, mid), target) ||
          search(nums.slice(mid + 1, right + 1), target)
        )
      }
    } else if (nums[mid] < nums[nums.length - 1]) {
      if (nums[mid] < target) {
        return (
          search(nums.slice(left, mid), target) ||
          search(nums.slice(mid + 1, right + 1), target)
        )
      } else if (nums[mid] > target) {
        right = mid - 1
      }
    } else if (nums[mid] === nums[nums.length - 1]) {
      return (
        search(nums.slice(left, mid), target) ||
        search(nums.slice(mid + 1, right + 1), target)
      )
    }
  }
  return false
}
// @lc code=end
console.log(search([1, 1], 0))
