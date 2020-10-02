/*
 * @lc app=leetcode.cn id=688 lang=typescript
 *
 * [688] “马”在棋盘上的概率
 */

// @lc code=start
//参考--由DFS转化为dp-滚动数组
function knightProbability(N: number, K: number, r: number, c: number): number {
  if (K === 0) return 1

  let dp = Array.from({ length: N }, () => Array.from({ length: N }, () => 0))

  dp[r][c] = 1
  for (let k = 0; k < K; k++) {
    const floor = Array.from({ length: N }, () => Array.from({ length: N }, () => 0))
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        let D1 = (i >= 1 && j >= 2) ? dp[i - 1][j - 2] : 0;
        let D2 = (i >= 2 && j >= 1) ? dp[i - 2][j - 1] : 0;
        let D3 = (i >= 2 && j < N - 1) ? dp[i - 2][j + 1] : 0;
        let D4 = (i >= 1 && j < N - 2) ? dp[i - 1][j + 2] : 0;
        let D5 = (i < N - 1 && j >= 2) ? dp[i + 1][j - 2] : 0;
        let D6 = (i < N - 2 && j >= 1) ? dp[i + 2][j - 1] : 0;
        let D7 = (i < N - 2 && j < N - 1) ? dp[i + 2][j + 1] : 0;
        let D8 = (i < N - 1 && j < N - 2) ? dp[i + 1][j + 2] : 0;
        floor[i][j] = (D1 + D2 + D3 + D4 + D5 + D6 + D7 + D8) / 8.0
      }
    }
    dp = floor
  }
  let res = 0;
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++) {
      res += dp[i][j];
    }
  return res
};
// @lc code=end

console.log(knightProbability(3, 2, 0, 0))