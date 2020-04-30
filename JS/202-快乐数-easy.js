/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * 参考--暴力解-哈哈哈
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  n += ''
  for (let i = 0; i < 100; i++) {
    let sum = 0
    for (let j = 0; j < n.length; j++) {
      sum += n[j] ** 2
    }
    if (sum === 1) return true
    n = sum + ''
  }
  return false
}
// @lc code=end
isHappy(19)
