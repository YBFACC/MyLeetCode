/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * 参考--双指针
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0
  let right = Math.sqrt(c) >> 0
  while (left <= right) {
    let sum = left ** 2 + right ** 2
    if (sum > c) {
      right--
    } else if (sum < c) {
      left--
    } else {
      return true
    }
  }
  return false
}
// @lc code=end
