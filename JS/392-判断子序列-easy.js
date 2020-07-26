/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * 参考--双指针
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let s_index = 0
  let t_index = 0
  if (s.length === 0) return true
  while (t_index <= t.length) {
    if (s[s_index] === t[t_index]) {
      s_index++

      if (s_index === s.length && t_index <= t.length) return true
    }
    t_index++
  }

  return false
}

// @lc code=end
console.log(isSubsequence('abc', 'ahbgdc'))
