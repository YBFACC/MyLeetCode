/**
 * 参考---简单
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var min = -Math.pow(2, 31)
  var max = Math.pow(2, 31) - 1
  var res = x
    .toString()
    .split('')
    .reverse()

  if (res[res.length - 1] === '-') {
    res.pop()
    res.unshift('-')
  }
  var test = res.join('')
  return test > max || test < min ? 0 : test
}

console.log(reverse(-123))
