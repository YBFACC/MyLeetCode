/*
 * @lc app=leetcode.cn id=166 lang=typescript
 *
 * [166] 分数到小数
 */

//参考--竖式除法--寻找相同的除数

// @lc code=start
function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator === 0) return '0'
  let res = ""
  if (numerator * denominator < 0) res += '-'
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)
  let num = numerator % denominator
  res += (numerator - num) / denominator
  if (num === 0) return res
  res += '.'

  const cache = [num]
  while (num !== 0) {
    num *= 10
    if (num < denominator) {
      cache.push(numerator)
      res += 0
      continue
    }
    const temp = Math.floor(num / denominator)
    res += temp
    num -= denominator * temp
    if (cache.includes(num)) {
      break
    }
    cache.push(num)
  }
  if (num === 0) return res
  let index = res.indexOf('.') + 1
  let _index = cache.indexOf(num)
  return res.slice(0, index + _index) + '(' + res.slice(index + _index) + ')'
};
// @lc code=end

console.log(fractionToDecimal(2, 1))