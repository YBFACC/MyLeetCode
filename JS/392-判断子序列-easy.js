/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * 参考--逆序预处理dp--找到字母第一次出现
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const dp = Array.from({ length: t.length + 1 }, () =>
    Array.from({ length: 26 }, () => t.length)
  )

  for (let i = t.length - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      if (String.fromCharCode(97 + j) === t[i]) {
        dp[i][j] = i
      } else {
        dp[i][j] = dp[i + 1][j]
      }
    }
  }

  let index = 0
  for (let i = 0; i < s.length; i++) {
    if (dp[index][s[i].charCodeAt() - 97] === t.length) {
      return false
    }
    index = dp[index][s[i].charCodeAt() - 97] + 1
  }

  return true
}

// @lc code=end
console.log(isSubsequence('axc', 'ahbgdc'))
