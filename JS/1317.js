/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  var res = []
  for (let i = 1; i <= n; i++) {
    if ((n - i).toString().includes('0') || i.toString().includes('0')) {
      continue
    } else {
      res.push(i)
      res.push(n - i)
      break
    }
  }
  return res
}

var n = 11
console.log(new getNoZeroIntegers(n))
