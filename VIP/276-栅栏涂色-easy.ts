//参考--dp
//最多连续两个--1.与i-2颜色不同。2.与i-1颜色不同

function numWays(n: number, k: number): number {
  const dp = Array.from({ length: n + 1 }, () => 0)
  dp[0] = 0
  dp[1] = k
  dp[2] = k * k
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] * (k - 1) + dp[i - 1] * (k - 1)
  }
  return dp[n]
};
numWays(2, 0)