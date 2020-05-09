/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * 自己--傻子暴力法
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return Math.trunc(Math.sqrt(x))
}
// @lc code=end

/**
 * 参考--二分法
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let res = 0
  const func = function (left, right) {
    if (left > right) return null
    let mid = Math.floor((left + right) / 2)
    let temp = mid ** 2
    if (temp <= x) {
      res = Math.max(res, mid)
      func(mid + 1, right)
    } else {
      func(left, mid - 1)
    }
  }
  func(0, x)
  return res
}

mySqrt(1024)
