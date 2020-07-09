/**
 * 自己--偷鸡
 * 同-65题
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  if (s.trim().length === 0) return false
  return !Number.isNaN(Number(s))
}