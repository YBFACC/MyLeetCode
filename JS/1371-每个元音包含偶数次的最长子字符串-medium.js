/*
 * @lc app=leetcode.cn id=1371 lang=javascript
 *
 * [1371] 每个元音包含偶数次的最长子字符串
 */

// @lc code=start
/**
 * 同周赛-5337
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
  var state = new Array(32)
  var cur = 0
  var ans = 0
  state[0] = -1
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'a':
        cur ^= 1//1
        break
      case 'e':
        cur ^= 2//10
        break
      case 'i':
        cur ^= 4//100
        break
      case 'o':
        cur ^= 8//1000
        break
      case 'u':
        cur ^= 16//10000
        break
      default:
        break
    }
    if (state[cur] === undefined) {
      state[cur] = i
    } else {
      ans = Math.max(ans, i - state[cur])
    }
  }
  return ans
}
// @lc code=end

