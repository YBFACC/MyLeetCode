/*
 * @lc app=leetcode.cn id=808 lang=typescript
 *
 * [808] 分汤
 */

// @lc code=start
//copy--DFS转DP
function soupServings(N: number): number {
  let num = Math.floor(N / 25) + (N % 25 === 0 ? 0 : 1);
  if (num >= 500) {
    return 1.0;
  }
  let dp: number[][] = [];
  for (let i = 0; i <= num * 2; i++) {
    dp[i] = [];
    for (let j = 0; j <= num * 2; j++) {
      if (i == 0 && j == 0) {
        dp[i][j] = 0.5;
      } else if (i == 0 && j > 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = 0;
      }
    }
  }
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      dp[i][j] = 0.25 * (dp[i - 4 > 0 ? i - 4 : 0][j]
        + dp[i - 3 > 0 ? i - 3 : 0][j - 1 > 0 ? j - 1 : 0]
        + dp[i - 2 > 0 ? i - 2 : 0][j - 2 > 0 ? j - 2 : 0]
        + dp[i - 1 > 0 ? i - 1 : 0][j - 3 > 0 ? j - 3 : 0]);
    }
  }
  return dp[num][num];
};

// @lc code=end

console.log(soupServings(50))