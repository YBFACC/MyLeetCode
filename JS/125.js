/**
 * 自己---正则表达式--性能差
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var arr = s.match(/[A-Za-z0-9]/g)
  if (arr === null) return true
  var strat = arr.join('').toUpperCase()
  var end = arr
    .reverse()
    .join('')
    .toUpperCase()
  return strat === end
}

console.log(isPalindrome('OP'))
