//自己--是子序列-可以不连续
function longestPalindromeSubseq(s: string): number {
  const dp: number[][] = Array.from({ length: s.length + 1 }, () =>
    Array.from({ length: s.length + 1 }, () => 0)
  )
  let res = 1
  for (let i = s.length; i > 0; i--) {
    for (let j = i; j <= s.length; j++) {
      if (j - i < 2 && s[i - 1] === s[j - 1]) {
        dp[i][j] = j - i + 1
        res = Math.max(res, dp[i][j])
      } else if (s[i - 1] === s[j - 1] && dp[i + 1][j - 1] > 0) {
        dp[i][j] = dp[i + 1][j - 1] + 2
        res = Math.max(res, dp[i][j])
      } else {
        dp[i][j] = Math.max(dp[i + 1][j - 1], dp[i][j - 1], dp[i + 1][j])
      }
    }
  }
  return res
}
longestPalindromeSubseq("adbba")
