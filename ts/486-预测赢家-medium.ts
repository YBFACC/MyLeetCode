/*
 * @lc app=leetcode.cn id=486 lang=typescript
 *
 * [486] 预测赢家
 */

// @lc code=start
//参考--二维dp
function PredictTheWinner(nums: number[]): boolean {
  const Len = nums.length
  const dp = Array.from({ length: Len }, () => Array.from({ length: Len }, () => 0))
  for (let i = 0; i < nums.length; i++) {
    dp[i][i] = nums[i]
  }

  for (let i = Len - 2; i >= 0; i--) {
    for (let j = i + 1; j < Len; j++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1])
    }
  }
  return dp[0][Len - 1] >= 0
};
// @lc code=end


console.log(PredictTheWinner([1, 5, 233, 7]))