/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * 自己--easy
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let res = ''
  let index = 32
  while (index > 0) {
    if (n & 1) {
      res += '1'
    } else {
      res += '0'
    }
    n = n >>> 1
    index--
  }
  return parseInt(res, 2)
}
// @lc code=end

let a = parseInt('00000010100101000001111010011100', 2)
reverseBits(0)
