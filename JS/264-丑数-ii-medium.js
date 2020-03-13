/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * 自己--dp--let min = Math.min(mul2, mul3, mul5)--性能好
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let dp = [1, 2, 3, 4, 5]
  let index2 = 2
  let index3 = 2
  let index5 = 4
  let mul2 = 6
  let mul3 = 9
  let mul5 = 25
  while (dp.length < n) {
    let min = Math.min(mul2, mul3, mul5)
    if (mul2 === min) {
      dp.push(mul2)
    } else if (mul3 === min) {
      dp.push(mul3)
    } else if (mul5 === min) {
      dp.push(mul5)
    }
    let end = dp[dp.length - 1]
    while (mul5 <= end) {
      index5++
      mul5 = 5 * dp[index5]
    }
    while (mul3 <= end) {
      index3++
      mul3 = 3 * dp[index3]
    }
    while (mul2 <= end) {
      index2++
      mul2 = 2 * dp[index2]
    }
  }
  return dp[n - 1]
}
// @lc code=end
nthUglyNumber(10)
