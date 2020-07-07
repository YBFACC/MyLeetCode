/**
 * 自己--dp
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  let dp = []
  dp[0] = 0n
  dp[1] = 1n

  let index = 2n
  while (index <= n) {
    for (let i = 1n; i <= index - 1n; i++) {
      let max1 = dp[i] > i ? dp[i] : i
      let max2 = dp[index - i] > index - i ? dp[index - i] : index - i
      dp[index] = dp[index] > max1 * max2 ? dp[index] : max1 * max2
    }

    index++
  }
  return dp[n] % 1000000007n
}
//953271190
console.log(cuttingRope(120))
