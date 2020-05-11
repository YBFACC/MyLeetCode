/**
 * 自己--easy
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  let res = ''

  for (let i = 0; i < length; i++) {
    if (S[i] === ' ') {
      res += '%20'
    } else {
      res += S[i]
    }
  }
  return res
}
