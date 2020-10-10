//自己--01背包问题
function canPartition(nums: number[]): boolean {
  if (nums.length === 0) return true
  let sum = 0
  for (const item of nums) {
    sum += item
  }
  if (sum % 2 !== 0) return false
  const target = Math.floor(sum / 2)
  const Len = nums.length
  const dp = Array.from({ length: Len + 1 }, () =>
    new Int16Array(target + 1))

  dp[0][0] = 1
  for (let i = 1; i <= Len; i++) {
    const curr = nums[i - 1]
    for (let j = 1; j <= target; j++) {
      dp[i][j] = dp[i - 1][j]
      if (curr <= j)
        dp[i][j] = dp[i][j] === 1 ? 1 : dp[i - 1][j - curr]
    }
  }
  return dp[Len][target] === 1
};
console.log(canPartition([1, 5, 11, 5]))