/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * 自己--dp画图分析--还可以优化
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  if (s.length === 0 || t.length === 0) return 0
  const row = t.length
  const col = s.length
  const dp = Array.from({ length: row + 1 }, () =>
    Array.from({ length: col + 1 }, () => 0)
  )

  for (let i = 1; i <= col; i++) {
    if (t[0] === s[i - 1]) {
      dp[1][i] = dp[1][i - 1] + 1
    } else {
      dp[1][i] = dp[1][i - 1]
    }
  }
  let count = 0
  for (let i = 2; i <= row; i++) {
    if (t[i - 1] === t[i - 2]) {
      count++
    } else {
      count = 0
    }
    for (let j = 1; j <= col; j++) {
      if (s[j - 1] === t[i - 1]) {
        if (count > 0) {
          dp[i][j] = dp[i][j - 1]
          count--
        } else {
          dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
        }
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[row][col]
}
// @lc code=end

console.log(numDistinct('aaabcccc', 'aabcc'))
