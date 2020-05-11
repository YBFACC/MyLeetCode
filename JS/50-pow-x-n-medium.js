/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * 参考--32位有符号整数===33位补码=>转为正数+无符号右移
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    console.log(n)
    let aa = myPow(x, -n)
    return 1 / aa
  } else if (n === 0) {
    return 1
  } else if (n === 1) {
    return x
  } else {
    let temp = myPow(x, n >>> 1)
    if (n % 2 === 1) {
      return temp * temp * x
    }
    return temp * temp
  }
}
// @lc code=end

console.log(myPow(2, -2147483648))

