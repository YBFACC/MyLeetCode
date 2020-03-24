/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * 参考--异或与同货--性能一般
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (a === 0 || b === 0) {
    return a || b
  }
  let temp
  while (b != 0) {
    temp = a ^ b
    b = (a & b) << 1
    a = temp
  }
  return a
}
// @lc code=end
getSum(3, 4)
