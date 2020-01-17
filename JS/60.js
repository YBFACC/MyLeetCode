/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  var darr = []
  for (let i = 1; i <= n; i++) {
    darr.push(i.toString())
  }
  var res = []
  var func = function(temp) {
    if (temp.length == n) {
      res.push(temp)
      return
    }

    for (let i = 0; i < n; i++) {
      if (!temp.includes(darr[i])) {
        func(temp + darr[i])
      }
    }
  }
  func('')
  return res[k-1]
}

getPermutation(3, 3)
