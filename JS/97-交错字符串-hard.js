/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * 自己--dp--可以优化
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length === 0 && s2 === s3) {
    return true
  }
  if (s2.length === 0 && s1 === s3) {
    return true
  }
  if (s2.length === 0 && s1.length === 0 && s3.length === 0) return true

  let dp = Array.from({ length: s2.length + 1 }, () =>
    Array.from({ length: s1.length + 1 }, () => -1)
  )

  let pd = Array.from({ length: s1.length + 1 }, () =>
    Array.from({ length: s2.length + 1 }, () => -1)
  )

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (pd[i - 1][j] !== -1) {
        let index = pd[i - 1][j] + 1
        if (s3[index] === s1[i - 1]) {
          pd[i][j] = Math.max(pd[i][j], index)
        }
      }

      if (pd[i][j - 1] !== -1) {
        let index = pd[i][j - 1] + 1
        if (s3[index] === s2[j - 1]) {
          pd[i][j] = Math.max(pd[i][j], index)
        }
      }
      if (pd[i][j - 1] === -1 && pd[i - 1][j] === -1) {
        let temp = s2.slice(0, j) + s1[i - 1]
        let _s3 = s3.slice(0, j + 1)
        if (temp === _s3) {
          pd[i][j] = Math.max(pd[i][j], j)
        }
      }
    }
  }

  for (let i = 1; i <= s2.length; i++) {
    for (let j = 1; j <= s1.length; j++) {
      if (dp[i - 1][j] !== -1) {
        let index = dp[i - 1][j] + 1
        if (s3[index] === s2[i - 1]) {
          dp[i][j] = Math.max(dp[i][j], index)
        }
      }

      if (dp[i][j - 1] !== -1) {
        let index = dp[i][j - 1] + 1
        if (s3[index] === s1[j - 1]) {
          dp[i][j] = Math.max(dp[i][j], index)
        }
      }
      if (dp[i][j - 1] === -1 && dp[i - 1][j] === -1) {
        let temp = s1.slice(0, j) + s2[i - 1]
        let _s3 = s3.slice(0, j + 1)
        if (temp === _s3) {
          dp[i][j] = Math.max(dp[i][j], j)
        }
      }
    }
  }

  return (
    dp[s2.length][s1.length] === s3.length - 1 ||
    pd[s1.length][s2.length] === s3.length - 1
  )
}
// @lc code=end

console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'))
