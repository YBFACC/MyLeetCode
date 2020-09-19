/*
 * @lc app=leetcode.cn id=1140 lang=typescript
 *
 * [1140] 石子游戏 II
 */

// @lc code=start
//参考--博弈类dp
function stoneGameII(piles: number[]): number {
  const Len = piles.length
  const dp = Array.from({ length: Len }, () => Array.from({ length: Len + 1 }, () => 0))
  let sum = 0
  for (let i = Len - 1; i >= 0; i--) {
    sum += piles[i]
    for (let m = 1; m < Len; m++) {
      if (i + m * 2 >= Len) {
        dp[i][m] = sum
      } else {
        for (let x = 1; x <= 2 * m; x++) {
          dp[i][m] = Math.max(dp[i][m], sum - dp[i + x][Math.max(m, x)])
        }
      }
    }
  }
  return dp[0][1]
};
// @lc code=end
console.log(stoneGameII([2, 7, 9, 4, 4]))
