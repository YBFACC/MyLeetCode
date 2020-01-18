/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  var res = 0
  var n = s.length
  var func = function(r, l, index) {
    if (r == l && l != 0) {
      res++
      r = 0
      l = 0
    }
    if (index < n) {
      s[index] == 'R' ? func(r + 1, l, index + 1) : func(r, l + 1, index + 1)
    }
  }
  func(0, 0, 0)
  return res
}

balancedStringSplit('RLRRLLRLRL')
