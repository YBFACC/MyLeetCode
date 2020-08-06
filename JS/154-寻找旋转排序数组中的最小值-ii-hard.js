/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * 自己--在153的基础上增加了递归
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 0) return Number.MAX_SAFE_INTEGER
  if (nums.length === 1) return nums[0]
  if (nums.length === 2 && nums[0] === nums[1]) return nums[0]
  if (nums.length === 3 && nums[0] === nums[1] && nums[1] === nums[2])
    return nums[0]
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = left + ((right - left) >>> 1)
    if (nums[mid] > nums[nums.length - 1]) {
      left = mid + 1
    } else if (nums[mid] < nums[nums.length - 1]) {
      right = mid
    } else if (nums[mid] === nums[nums.length - 1]) {
      return Math.min(
        findMin(nums.slice(left, mid)),
        findMin(nums.slice(mid, right + 1))
      )
    }
  }
  return nums[left]
}
// @lc code=end
console.log(findMin([1, 3, 3]))
