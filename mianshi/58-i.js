/**
 * 自己--easy
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.match(/\S+/g)
  if (!arr) return ''
  arr.reverse()
  return arr.join(' ')
}
