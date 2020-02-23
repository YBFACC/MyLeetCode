/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 */

// @lc code=start
/**
 * 自己--～～不能处理32位以上会溢出（大概是4.3E10）--性能一般
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  if (num.length < 3) return false
  if (parseInt(num, 10) === 0) return true

  let res = false
  const backtracking = function(num, accumulation) {
    if (num.length < 1) return
    for (let i = 1; i < num.length; i++) {
      if (res === true) return
      let str = num.slice(i)
      if (str[0] === '0' || (num[0] === '0' && i > 1)) continue
      let item = parseInt(num.slice(0, i), 10) + accumulation
      if (item.toString(10) === str) {
        res = true
        return
      }
      if (str.indexOf(item) === 0)
        backtracking(str, parseInt(num.slice(0, i), 10))
    }
  }
  for (let i = 1; i < num.length / 2; i++) {
    if (res === false && num[0] !== '0') {
      backtracking(num.slice(i), parseInt(num.slice(0, i), 10))
    }
  }
  if (res === false && num[0] === '0') {
    backtracking(num.slice(1), 0)
  }
  return res
}
// @lc code=end
isAdditiveNumber('11111111111011111111111')
