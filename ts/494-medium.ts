
//时间复杂度太高

// function findTargetSumWays(nums: number[], target: number): number {
//   let res = 0
//   const Len = nums.length
//   const dfs = function (index: number, sum: number) {
//     if (index > Len) return
//     if (Len === index && sum === target) {
//       res++
//       return
//     }
//     dfs(index + 1, sum + nums[index])
//     dfs(index + 1, sum - nums[index])
//   }
//   dfs(0, 0)
//   return res
// };

//neg是负数的集合
//sum=(sum-neg)-neg=target
//neg=(sum-target)/2
//求构成neg集合的种类
//提示--类似1049分为2堆

function findTargetSumWays(nums: number[], target: number): number {
  let sum = 0
  const Len = nums.length
  nums.forEach((v) => void (sum += v))
  const diff = sum - target
  if (diff < 0 || diff % 2 !== 0) {
    return 0
  }
  const neg = diff / 2
  const dp = Array.from({ length: neg + 1 }, () => 0)
  dp[0] = 1
  for (let i = 1; i <= Len; i++) {
    const num = nums[i - 1]
    for (let j = neg; j >= num; j--) {
      dp[j] += dp[j - num]
    }
  }
  return dp[neg]
};


findTargetSumWays([1, 1, 1, 1, 1], 3)