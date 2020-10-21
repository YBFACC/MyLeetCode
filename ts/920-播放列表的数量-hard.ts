/*
 * @lc app=leetcode.cn id=920 lang=typescript
 *
 * [920] 播放列表的数量
 */

// @lc code=start
//参考--dp
function numMusicPlaylists(N: number, L: number, K: number): number {
  if (L === 0) return 0
  //播放第i首，包含j首不同的歌
  //不用记录具体的哪首歌的播放状态
  const dp = Array.from({ length: L + 1 }, () => Array.from({ length: N + 1 }, () => 0))
  dp[0][0] = 1
  for (let i = 1; i <= L; i++) {
    for (let j = 1; j <= N; j++) {
      dp[i][j] += dp[i - 1][j - 1] * (N - j + 1)
      dp[i][j] += dp[i - 1][j] * Math.max(0, j - K)
      dp[i][j] %= 1000000007
    }
  }
  return dp[L][N]
};
// @lc code=end

numMusicPlaylists(3, 3, 1)