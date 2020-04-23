/**
 * 参考--dp-考虑硬币顺序带来的影响--性能好
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
  let dp = new Array(n + 1).fill(0)
  dp[0] = 1
  let coins = [1, 5, 10, 25]

  for (const coin of coins) {
    for (let i = coin; i <= n; i++) {
      dp[i] = (dp[i] + dp[i - coin]) % 1000000007
    }
  }
  return dp[n]
}

waysToChange(5)
