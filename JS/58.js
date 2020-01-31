/**
 * 自己---简单--性能一般
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {  
  var temp = s.split(' ')
  var len = temp.length
  for (let i = 1; i <= len; i++) {
    if (temp[len - i] !== '') {
      return temp[len - i].length
    }
  }
  return 0
}

console.log(lengthOfLastWord(' '))
