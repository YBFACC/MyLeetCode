/**
 * 参考---考语文--a比b长a就不是你的子序列
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if (a === b) return -1
  return a.length >= b.length ? a.length : b.length
}
findLUSlength('ab', 'abab')
