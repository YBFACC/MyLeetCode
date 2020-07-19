/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * 自己重写--双指针
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  if (numbers.length === 0) return []
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    } else {
      return [left + 1, right + 1]
    }
  }
  return []
}
// @lc code=end
