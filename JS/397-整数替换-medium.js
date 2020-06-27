/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * 参考--递归
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  if (n === 1) return 0
  if ((n & 1) === 0) {
    return 1 + integerReplacement(n / 2)
  } else {
    return 1 + Math.min(integerReplacement(n + 1), integerReplacement(n - 1))
  }
}
// @lc code=end
console.log(integerReplacement(65535))
