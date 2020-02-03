/**
 * 自己---正则--感觉写的太复杂了
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  var res = ''
  var reg = eval('/^(\\w{' + k + '})(\\w{0,' + k + '})/')
  for (let i = 0; ; i++) {
    if (s.length < k) {
      res += s
        .split('')
        .reverse()
        .join('')
      break
    } else {
      res += s
        .replace(reg, (match, p1, p2) => {
          return (
            p1
              .split('')
              .reverse()
              .join('') + p2
          )
        })
        .slice(0, 2 * k)
      s = s.slice(2 * k)
    }
  }
  return res
}
console.log(reverseStr('abcdefg', 1))
