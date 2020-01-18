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

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  var nums = 0
  var res = 0
  var n=s.length
  for (let i = 0; i < n; i++) {
    s[i] == 'R' ? nums++ : nums--
    nums == 0 ? res++ : null
  }
  return res
}

balancedStringSplit('RLRRLLRLRL')
