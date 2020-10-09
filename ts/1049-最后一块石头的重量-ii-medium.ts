/*
 * @lc app=leetcode.cn id=1049 lang=typescript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
//参考--类01背包问题
function lastStoneWeightII(stones: number[]): number {
  let sum = 0
  for (const stone of stones) {
    sum += stone
  }
  const target = Math.floor(sum / 2)
  const Len = stones.length

  const dp = Array.from({ length: Len + 1 }, () =>
    Array.from({ length: target + 1 }, () => 0))

  for (let i = 1; i <= Len; i++) {
    const curr = stones[i - 1]
    for (let j = 1; j <= target; j++) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j])
      if (j >= curr) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - curr] + curr)
      }
    }
  }
  return sum - 2 * dp[Len][target]
};
// @lc code=end

lastStoneWeightII([2, 7, 4, 1, 8, 1])