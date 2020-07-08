/**
 * 复习--dp
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let dp = Array.from({ length: s.length + 1 }, () =>
    Array.from({ length: p.length + 1 }, () => false)
  )
  dp[0][0] = true

  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2]
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j] || dp[i - 1][j - 2]
        } else {
          dp[i][j] = dp[i][j - 2]
        }
      }
    }
  }

  return dp[s.length][p.length]
}

isMatch('aab', 'c*a*b')
