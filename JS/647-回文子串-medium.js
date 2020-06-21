/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * 自己--中心拓展法
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (s.length === 0) return 0
  let res = 0
  for (let i = 0; i < s.length; i++) {
    func(i, i)
    func(i, i + 1)
  }
  function func(left, right) {
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        res++
      } else {
        break
      }
      left--
      right++
    }
  }
  return res
}

// @lc code=end

countSubstrings('aaa')
