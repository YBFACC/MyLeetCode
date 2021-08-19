//参考--序列 DP

function numberOfArithmeticSlices(nums: number[]): number {
  const Len = nums.length
  const dp: any = Array.from({ length: Len }, () => {
    return {}
  })
  let res = 0
  for (let i = 1; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      const step = nums[i] - nums[j]
      if (dp[i][step] === undefined) {
        dp[i][step] = 0
      }
      if (dp[j][step] === undefined) {
        dp[j][step] = 0
      }
      dp[i][step] += dp[j][step] + 1
      if (dp[j][step] > 0) {
        res += dp[j][step]
      }
    }
  }
  return res
};

numberOfArithmeticSlices([7, 7, 7, 7, 7])