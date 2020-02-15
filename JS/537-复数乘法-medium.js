/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * 没注意到：---感觉可以更简单一些--正则匹配,字符串自动转化为复数--性能一般
 * 将以 a+bi 的形式给出
 * 输出也应当符合这种形式。
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  let numA = a.match(/-?\d+(?=\+|$)/)
  let numB = b.match(/-?\d+(?=\+|$)/)
  let iA = a.match(/-?\d+(?=i)/)
  let iB = b.match(/-?\d+(?=i)/)
  let num = numA * numB - iA * iB
  let i = iA * numB + numA * iB
  
  return num + '+' + i + 'i'
}
console.log(complexNumberMultiply('1+0i', '1+0i'))

// @lc code=end
