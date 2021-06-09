/*
 * @lc app=leetcode.cn id=1049 lang=typescript
 *
 * [1049] 最后一块石头的重量 II
 */

//参考--动态规划
//将石块分为2堆，使一堆尽可能接近一半

// @lc code=start
function lastStoneWeightII(stones: number[]): number {
  let sum = 0
  stones.forEach((v, i) => void (sum += v))
  const Len = stones.length, m = Math.floor(sum / 2)
  const dp = Array.from({ length: m + 1 }, () => false)
  dp[0] = true
  for (let i = 0; i < Len; i++) {
    for (let j = m; j >= 0; j--) {
      if (j >= stones[i]) {
        dp[j] = dp[j - stones[i]] || dp[j]
      }
    }
  }
  for (let j = m; ; --j) {
    if (dp[j]) {
      return sum - 2 * j;
    }
  }
};
// @lc code=end

console.log(lastStoneWeightII([31, 26, 33, 21, 40]))