/**
 * 自己---正则分割---性能差
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var arr = s.match(/\S+/g)
  if (arr === null) return ''
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]
      .split('')
      .reverse()
      .join('')
  }
  return arr.join(' ')
}

console.log(reverseWords(''))
