/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var len = needle.length
  for (let i = 0; i < haystack.length; i++) {
    let temp = haystack.slice(i,i+len)
    if(temp===needle){
      return i
    }
    if(i>haystack.length-len){
      return -1
    }
  }

  return 0
}

strStr('hello', 'll')
