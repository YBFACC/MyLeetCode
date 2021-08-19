//参考--dp
//从后退导

function longestPalindromeSubseq(s: string): number {
  const Len = s.length
  const dp = Array.from({ length: Len }, () => Array.from({ length: Len }, () => 0))

  for (let i = 0; i < Len; i++) {
    dp[i][i] = 1
  }

  for (let i = Len - 1; i >= 0; i--) {
    for (let j = i + 1; j < Len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[0][Len - 1]
};