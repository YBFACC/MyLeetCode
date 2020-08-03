/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * 自己--改进精简代码
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0
  let index1 = 0
  let index2 = 0
  let res = ''
  while (index1 < num1.length || index2 < num2.length) {
    const n1 = index1 < num1.length ? +num1[num1.length - 1 - index1] : 0
    const n2 = index2 < num2.length ? +num2[num2.length - 1 - index2] : 0
    let sum = n1 + n2 + carry
    carry = 0
    if (sum > 9) {
      sum -= 10
      carry = 1
    }
    res = sum + res
    index1++
    index2++
  }

  if (carry !== 0) {
    res = 1 + res
  }
  return res
}
// @lc code=end
addStrings('96762', '8749')
;('6762')
;('8749')
