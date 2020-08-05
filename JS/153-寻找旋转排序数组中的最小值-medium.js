/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * 自己--升序--二分
 * 以最后一个节点为判断条件
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 0) return null
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = left + ((right - left) >>> 1)
    if (nums[mid] > nums[nums.length - 1]) {
      left = mid + 1
    } else if (nums[mid] < nums[nums.length - 1]) {
      right = mid
    }
  }
  return nums[left]
}
// @lc code=end
console.log(findMin([3, 4, 5, 6, 7, 1, 2]))
