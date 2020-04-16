/**
 * 自己--dp类斐波那契数列--性能好
 * 还可以优化空间维常数
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  num = num.toString()
  let dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= num.length; i++) {
    let temp = parseInt(num.slice(i - 2, i), 10)
    if (temp < 26 && num[i - 2] !== '0') {
      dp[i] = dp[i - 2] + dp[i - 1]
    } else {
      dp[i] = dp[i - 1]
    }
  }
  return dp[num.length]
}
translateNum('12258')
