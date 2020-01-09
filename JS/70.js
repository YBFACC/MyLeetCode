/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const dp = []
  dp[0] = 1
  dp[1] = 1
  for (let index = 2; index <= n; index++) {
    dp[index]=dp[index-1]+dp[index-2]
  }
  return dp[n]
}
