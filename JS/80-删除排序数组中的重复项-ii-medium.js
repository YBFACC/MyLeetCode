/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * 自己--splice删除元素--性能一般
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 3) return nums.length
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      while (nums[i + 1] === nums[i]) {
        nums.splice(i, 1)
      }
    }
  }
  return nums.length
}
// @lc code=end

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])
