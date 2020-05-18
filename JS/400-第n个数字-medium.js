/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 */

// @lc code=start
/**
 * 参考--找规律
 * 1...9=>9=>9
 * 10...99=>90=>99
 * 100...999=>900=>999
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  if (n < 10) return n
  let length = 0
  let cnt = 9
  let i = 1
  while (length + cnt * i < n) {
    length += cnt * i
    cnt *= 10
    i++
  }
  let num = Math.pow(10, i - 1) + Math.trunc((n - length - 1) / i) //区间值+长度/步长
  let index = (n - length - 1) % i

  return num.toString(10)[index]
}
// @lc code=end

console.log(findNthDigit(11))
