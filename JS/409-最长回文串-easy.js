/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * ?_?
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? 1 + map.get(s[i]) : 1)
  }
  let odd = 0
  let sum = 0

  map.forEach((k, v) => {
    let key = ~~k
    if (key > 1) {
      if (key % 2 === 0) {
        sum += key
      } else {
        sum += key - 1
        odd = 1
      }
    } else {
      odd = 1
    }
  })
  return sum + odd
}
// @lc code=end
longestPalindrome('abccccdd')
