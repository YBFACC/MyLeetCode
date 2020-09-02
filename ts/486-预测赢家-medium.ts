/*
 * @lc app=leetcode.cn id=486 lang=typescript
 *
 * [486] 预测赢家
 */

// @lc code=start
//参考--博弈类dp通用解法
function PredictTheWinner(nums: number[]): boolean {
  const Len = nums.length
  const dp = Array.from({ length: Len }, () => Array.from({ length: Len }, () => [0, 0]))
  for (let i = 0; i < Len; i++) {
    dp[i][i][0] = nums[i]
  }
  for (let i = Len - 2; i >= 0; i--) {
    for (let j = i + 1; j < Len; j++) {
      const left = nums[i] + dp[i + 1][j][1]
      const right = nums[j] + dp[i][j - 1][1]
      if (left > right) {
        dp[i][j][0] = left
        dp[i][j][1] = dp[i + 1][j][0]
      } else {
        dp[i][j][0] = right
        dp[i][j][1] = dp[i][j - 1][0]
      }
    }
  }
  return dp[0][Len - 1][0] >= dp[0][Len - 1][1]
};
// @lc code=end


