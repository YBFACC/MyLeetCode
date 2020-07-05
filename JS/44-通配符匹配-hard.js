/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * 参考--dp
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  const sLen = s.length
  const pLen = p.length
  // 初始化（包括了一部分base case）
  const dp = Array.from({ length: sLen + 1 }, () =>
    Array.from({ length: pLen + 1 }).fill(false)
  )
  dp[0][0] = true
  for (let i = 1; i <= pLen; i++) {
    dp[0][i] = p[i - 1] === '*' && dp[0][i - 1]
  }
  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*' && (dp[i - 1][j] || dp[i][j - 1])) {
        dp[i][j] = true
      }
    }
  }

  return dp[sLen][pLen] // 整个s串和整个p串是否匹配
}

// @lc code=end

isMatch('adceb', '*a*b')
