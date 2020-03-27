/**
 * 自己--dp-O(n)-O(1)
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  let dp = Array(2)
  dp[0] = 0
  dp[1] = 1
  for (let i = 0; i < n - 1; i++) {
    let temp = dp[0] + dp[1]
    dp[0] = dp[1]
    if (temp > 1000000007) {
      temp -= 1000000007
    }
    dp[1] = temp
  }
  return dp[1]
}
