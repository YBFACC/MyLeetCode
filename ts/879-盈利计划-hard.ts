/*
 * @lc app=leetcode.cn id=879 lang=typescript
 *
 * [879] 盈利计划
 */

// @lc code=start
//参考--dp--01背包问题升级版
function profitableSchemes(G: number, P: number, group: number[], profit: number[]): number {
  const Len = profit.length
  //第i项--背包容量--累积的利润--方案数

  const dp = Array.from({ length: Len + 1 }, () =>
    Array.from({ length: G + 1 }, () =>
      new Int32Array(P + 1)))


  for (let i = 0; i <= Len; ++i) {
    for (let j = 0; j <= G; ++j) {
      dp[i][j][0] = 1;
    }
  }

  for (let i = 1; i <= Len; i++) {
    const p = profit[i - 1]
    const g = group[i - 1]

    for (let j = 1; j <= G; j++) {
      for (let k = 0; k <= P; k++) {
        dp[i][j][k] = dp[i - 1][j][k]
        if (j >= g)
          dp[i][j][k] += dp[i - 1][j - g][Math.max(0, k - p)]
        dp[i][j][k] %= 1000000007
      }
    }

  }

  return dp[Len][G][P]
};
// @lc code=end
//4
console.log(profitableSchemes(1
  , 1
  , [1, 1, 1, 1, 2, 2, 1, 2, 1, 1]
  , [0, 1, 0, 0, 1, 1, 1, 0, 2, 2]))

profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8])

profitableSchemes(5, 3, [2, 2], [2, 3])