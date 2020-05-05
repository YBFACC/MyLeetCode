/**
 * 自己--easy
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let start = s.slice(0, n)
  let end = s.slice(n)
  return end + start
}
