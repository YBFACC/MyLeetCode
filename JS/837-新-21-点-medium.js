/*
 * @lc app=leetcode.cn id=837 lang=javascript
 *
 * [837] 新21点
 */

// @lc code=start
//copy--
var new21Game = function(N, K, W) {
  const dp = {};
  // 最后一轮抽取后得分在 K ~ k - 1 + W 中间
  let temp = 0;
  for (i = K; i < K + W; i ++) {
    if (i > N) {
      dp[i] = 0;
    } else {
      dp[i] = 1;
    }
    if (i !== K) {
      temp += dp[i];
    }
  }
  dp[K + W] = dp[K] * W - temp;
  for (i = K - 1; i >= 0; i --) {
    dp[i] = ( dp[i + 1] * (W + 1) - dp[i + 1 + W]) / W;
  }
  return dp[0];
};

// @lc code=end

