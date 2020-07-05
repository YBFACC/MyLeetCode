/*
 * @lc app=leetcode.cn id=837 lang=javascript
 *
 * [837] 新21点
 */

// @lc code=start
/**
 * 参考--反推dp
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function (N, K, W) {
  const dp = {}
  for (let i = K; i < K + W; i++) {
    if (i <= N) {
      dp[i] = 1
    } else {
      dp[i] = 0
    }
  }
  dp[K - 1] = 0
  for (let j = 1; j <= W; j++) {
    dp[K - 1] += dp[j + K - 1] / W
  }

  for (let i = K - 2; i >= 0; i--) {
    dp[i] = dp[i + 1] + (-dp[i + W + 1] + dp[i + 1]) / W
  }

  return dp[0]
}

// @lc code=end

new21Game(21, 17, 10)
