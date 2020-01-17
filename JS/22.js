/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var res = []
  var func = function(temp, left, right) {
    if (left == right && right == n) {
      res.push(temp)
      return
    }
    if (n > left) {
      func(temp + '(', left + 1, right)
    }
    if (n > right && left != 0 && left > right) {
      func(temp + ')', left, right + 1)
    }
  }
  func('', 0, 0)
  return res
}
generateParenthesis(3)
