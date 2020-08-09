/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * 自己--重做--回溯
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length < 4) return []
  const res = []
  const min = 0
  const max = 255

  help(s.slice(0, 1), 1, 1)
  if (s[0] !== '0') {
    help(s.slice(0, 2), 2, 1)
    const num = parseInt(s.slice(0, 3), 10)
    if (num <= max && num >= min) {
      help(s.slice(0, 3), 3, 1)
    }
  }

  function help(str, index, Lv) {
    if (Lv === 4 && index === s.length) {
      res.push(str)
      return
    }
    if (index > s.length || Lv > 4) return
    help(str + '.' + s.slice(index, index + 1), index + 1, Lv + 1)
    if (s[index] !== '0') {
      help(str + '.' + s.slice(index, index + 2), index + 2, Lv + 1)
      const num = parseInt(s.slice(index, index + 3), 10)
      if (num <= max && num >= min) {
        help(str + '.' + s.slice(index, index + 3), index + 3, Lv + 1)
      }
    }
  }
  return res
}
// @lc code=end
restoreIpAddresses('010010')
