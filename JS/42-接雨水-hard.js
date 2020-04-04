/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * 参考--双指针+木桶蓄水--性能好
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0
  let right = height.length - 1
  let res = 0
  let left_max = 0
  let right_max = 0
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= left_max
        ? (left_max = height[left])
        : (res += left_max - height[left])
      left++
    } else {
      height[right] >= right_max
        ? (right_max = height[right])
        : (res += right_max - height[right])
      right--
    }
  }
  return res
}
// @lc code=end

console.log(trap([4, 2, 3]))
