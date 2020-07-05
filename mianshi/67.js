/**
 * 复习--还是用正则
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  let INT_MAX = 2147483647
  let INT_MIN = -2147483648
  str = str.trim()

  if (!/\-||\d||\+/.test(str[0])) return 0

  let num1 = str.match(/^(\+||\-)\d+||\d+/)[0]

  let res = Number(num1)

  if (res > INT_MAX) return INT_MAX
  if (res < INT_MIN) return INT_MIN

  return res
}

console.log(strToInt('-91283472332'))
