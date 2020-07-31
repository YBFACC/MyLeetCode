/**
 * 自己--重做--3指针
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  if (k <= 0) return 0
  let index_3 = 0
  let index_5 = 0
  let index_7 = 0
  let dp = new Array(k)
  dp[0] = 1
  let index = 1
  while (index < k) {
    let min = Math.min(dp[index_3] * 3, dp[index_5] * 5, dp[index_7] * 7)
    dp[index] = min
    if (min === dp[index_3] * 3) {
      index_3++
    }
    if (min === dp[index_5] * 5) {
      index_5++
    }
    if (min === dp[index_7] * 7) {
      index_7++
    }
    index++
  }

  return dp[k - 1]
}
console.log(getKthMagicNumber(0))
