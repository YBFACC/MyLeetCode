/**
 * 自己--参考滑动窗口--内存性能差
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var len = s.length
  if (len === 1) return 1
  var max = 0
  var arr = []
  for (let i = 0; i < len; i++) {
    let index = arr.indexOf(s[i])
    if (index !== -1) {
      max = Math.max(max, arr.length)
      arr = arr.slice(index + 1)
      arr.push(s[i])
    } else {
      arr.push(s[i])
    }
    if (i === len - 1) {
      max = Math.max(max, arr.length)
    }
  }
  return max
}
lengthOfLongestSubstring('dvdf')
