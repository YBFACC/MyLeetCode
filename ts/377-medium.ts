/*
 * @lc app=leetcode.cn id=377 lang=typescript
 *
 * [377] 组合总和 Ⅳ
 */

//参考--区间dp
//0-target的背包问题

// @lc code=start
function combinationSum4(nums: number[], target: number): number {
  const dp = Array.from({ length: target + 1 }, () => 0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (i >= num)
        dp[i] += dp[i - num]
    }
  }
  return dp[target]
};
// @lc code=end

combinationSum4([1, 2]
  , 10)