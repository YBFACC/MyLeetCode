/**
 * 参考--找规律--递归
 * 1~9=>1
 * 10~99=>20
 * 100~999=>300
 * 1000~9999=>4000
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  const f = function (n) {
    if (n < 1) return 0
    let str = n + ''
    let pow = Math.pow(10, str.length - 1)
    let last = n - str[0] * pow
    if (str[0] === '1') {
      return f(pow - 1) + last + 1 + f(last)
    } else {
      return pow + str[0] * f(pow - 1) + f(last)
    }
  }
  return f(n)
}

console.log(countDigitOne(2345))
