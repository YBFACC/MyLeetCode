/**
 * 参考---filter--性能好
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  var list = A.map(str => {
    let arr = str.split('')
    let odd = arr
      .filter((v, i) => i % 2 === 1)
      .sort()
      .join('')
    let even = arr
      .filter((v, i) => i % 2 === 0)
      .sort()
      .join('')
    return odd + even
  })
  return [...new Set(list)].length
}
numSpecialEquivGroups(['abcd', 'cdab', 'adcb', 'cbad'])
