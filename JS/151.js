/**
 * 自己---正则--性能一般
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var arr = s.match(/\S+/g)
  if (arr === null) return ''
  return arr.reverse().join(' ')
}
reverseWords('  ')
