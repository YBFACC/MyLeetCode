/*
 * @lc app=leetcode.cn id=877 lang=typescript
 *
 * [877] 石子游戏
 */

//参考--区间dp

// @lc code=start
function stoneGame(piles: number[]): boolean {
  const Len = piles.length
  const dp = Array.from({ length: Len }, () => Array.from({ length: Len }, () => 0))
  for (let i = 0; i < Len; i++) {
    dp[i][i] = piles[i]
  }
  for (let i = Len - 2; i >= 0; i--) {
    for (let j = i + 1; j < Len; j++) {
      dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])
    }
  }
  return dp[0][Len - 1] > 0
};
// @lc code=end

