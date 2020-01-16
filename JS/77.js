/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var res = []
  var func = function(temp, index) {
    if (temp.length == k) {
      res.push(temp)
      return;
    }
    for (let i = index; i <= n; i++) {
      temp.push(i)
      func(temp.slice(), i + 1)
      temp.pop()
    }
  }
  func([], 1)
  return res
}

var n = 4
var k = 2
combine(4, 2)
