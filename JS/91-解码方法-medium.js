/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * 参考--类斐波那契数列--注意“0”的位置--t(n)m(n)
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s.length === 0 || s[0] === '0') return 0
  let list = Array(s.length + 1).fill(0)
  list[0] = 1
  list[1] = 1
  for (let i = 2; i <= s.length; i++) {
    if (s[i - 1] !== '0') {
      list[i] += list[i - 1]
    }
    if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] < 7)) {
      list[i] += list[i - 2]
    }
  }
  return list[s.length]
}
// @lc code=end
numDecodings('101')
