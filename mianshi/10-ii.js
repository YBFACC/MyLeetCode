/**
 * 自己--dp
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  if (n === 0) return 1
  if (n === 1) return 1
  let dp = Array(2)
  dp[0] = 1
  dp[1] = 2
  for (let i = 2; i < n; i++) {
    let temp = dp[0] + dp[1]
    dp[0] = dp[1]
    if (temp > 1000000007) {
      temp -= 1000000007
    }
    dp[1] = temp
  }
  return dp[1]
}
numWays(7)
