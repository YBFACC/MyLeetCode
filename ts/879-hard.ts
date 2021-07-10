/*
 * @lc app=leetcode.cn id=879 lang=typescript
 *
 * [879] 盈利计划
 */

//参考--背包问题

// @lc code=start
function profitableSchemes(n: number, minProfit: number, group: number[], profit: number[]): number {
  const dp = Array.from({ length: group.length+1 }, () =>
    Array.from({ length: n + 1 }, () =>
      Array.from({ length: minProfit + 1 }, () => 0)));
  dp[0][0][0] = 1
  const Len = group.length
  for (let i = 1; i <= Len; i++) {
    const members = group[i - 1], earn = profit[i - 1]
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= minProfit; k++) {
        if (j < members) {
          dp[i][j][k] = dp[i - 1][j][k]
        } else {
          //max很精妙，将数组的上限锁在了minProfit
          dp[i][j][k] = (dp[i - 1][j][k] + dp[i - 1][j - members][Math.max(0, k - earn)]) % 1000000007
        }
      }
    }
  }
  let sum = 0;
  for (let j = 0; j <= n; j++) {
    sum = (sum + dp[Len][j][minProfit]) % 1000000007
  }
  return sum;
};

// @lc code=end

profitableSchemes(5, 3, [2, 2], [2, 3])
profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8])