/*
 * @lc app=leetcode.cn id=368 lang=typescript
 *
 * [368] 最大整除子集
 */

// @lc code=start
//参考--二维dp
var largestDivisibleSubset = function (nums: number[]): number[] {
  if (nums.length <= 1) return nums
  nums.sort((a, b) => a - b)
  const dp = [[nums[0]]]
  let maxIndex = 0
  for (let i = 1; i < nums.length; i++) {
    let temp = dp.length
    for (let j = temp - 1; j >= 0; j--) {
      if (
        nums[i] % dp[j][dp[j].length - 1] === 0 &&
        dp[j].length + 1 >= dp[maxIndex].length
      ) {
        dp.push([...dp[j], nums[i]])
        maxIndex = dp.length - 1
      }
    }
    if (dp.length === temp) {
      dp.push([nums[i]])
    }
  }
  return dp[maxIndex]
}

// @lc code=end
console.log(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720]))
