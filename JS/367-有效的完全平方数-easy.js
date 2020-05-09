/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * 自己--二分查找
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1
  let right = num

  while (left <= right) {
    let mid = (left + right) >> 1
    let temp = mid ** 2
    if (temp < num) {
      left = mid + 1
    } else if (temp > num) {
      right = mid - 1
    } else {
      return true
    }
  }
  return false
}
// @lc code=end
