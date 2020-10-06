/*
 * @lc app=leetcode.cn id=698 lang=typescript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
//copy--状压dp
function canPartitionKSubsets(nums: number[], k: number): boolean {
  const Len = nums.length
  nums.sort((a, b) => a - b)

  let sum = nums.reduce((pre, curr) => pre + curr, 0)
  const target = sum / k
  if (sum % k !== 0 || nums[Len - 1] > target) return false

  const dp = Array.from({ length: 1 << Len }, () => false)
  dp[0] = true
  const total = Array.from({ length: 1 << Len }, () => 0)

  for (let state = 0; state < (1 << Len); state++) {
    if (!dp[state]) continue;
    for (let i = 0; i < Len; i++) {
      let future = state | (1 << i);
      if (state != future && !dp[future]) {
        if (nums[i] <= target - (total[state] % target)) {
          dp[future] = true;
          total[future] = total[state] + nums[i];
        } else {
          break;
        }
      }
    }
  }
  return dp[(1 << Len) - 1];
};

// @lc code=end

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4))