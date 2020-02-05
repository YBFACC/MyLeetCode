/**
 * 自己---splice()--性能一般
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  var count = 1
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++
      chars.splice(i, 1)
      i--
    } else if (count !== 1) {
      let str = count.toString(10)
      chars.splice(i + 1, 0, ...count.toString(10).split(''))
      i += str.length
      count = 1
    }
  }
  return chars.length
}
compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])
