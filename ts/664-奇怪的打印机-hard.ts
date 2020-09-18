/*
 * @lc app=leetcode.cn id=664 lang=typescript
 *
 * [664] 奇怪的打印机
 */
// @lc code=start
//参考--区间dp--3重for
function strangePrinter(s: string): number {
  if (s.length === 0) return 0
  const Len = s.length

  const dp = Array.from({ length: Len + 1 }, () => Array.from({ length: Len + 1 }, () => 0))

  for (let i = 0; i < Len; i++) {
    dp[i][i] = 1
  }

  for (let length = 2; length <= Len; length++) {
    for (let i = 0; i + length - 1 < Len; i++) {
      const j = i + length - 1
      dp[i][j] = dp[i + 1][j] + 1
      for (let k = i + 1; k <= j; k++) {
        if (s[i] === s[k]) {
          dp[i][j] = Math.min(dp[i][j], dp[i][k - 1] + dp[k + 1][j])
        }
      }
    }
  }
  return dp[0][Len - 1]
};
// @lc code=end

console.log(strangePrinter("aaabbb"))