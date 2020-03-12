/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * 参考-isInteger判断整数--递归--性能一般
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 0) return false
  if (num === 1) return true
  if (Number.isInteger(num / 2)) {
    return isUgly(num / 2)
  } else if (Number.isInteger(num / 3)) {
    return isUgly(num / 3)
  } else if (Number.isInteger(num / 5)) {
    return isUgly(num / 5)
  } else {
    return false
  }
}
// @lc code=end
