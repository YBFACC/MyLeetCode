/**
 * 自己--简单---性能棒
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var len = needle.length
  if (len === 0) return 0
  for (let i = 0; i < haystack.length; i++) {
    let temp = haystack.slice(i, i + len)
    if (temp === needle) {
      return i
    }
    if (i > haystack.length - len) {
      return -1
    }
  }
  return -1
}

console.log(strStr('', ''))
