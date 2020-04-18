/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 自己--双指针向内推进-水桶盛水问题--性能好
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let max
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left)
    max = !max ? area : Math.max(max, area)
    if (height[left] <= height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
}
// @lc code=end

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
