/**
 * 跟67题相似--双按位非（NOT）将“”变0--性能一般
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var len1 = num1.length - 1
  var len2 = num2.length - 1
  var carry = 0
  var str = ''
  while (len1 >= 0 || len2 >= 0) {
    sum = ~~num1[len1] + ~~num2[len2] + carry
    if (carry !== 0) carry = 0
    if (sum > 9) {
      sum -= 10
      carry++
    }
    str = sum + str
    len1--
    len2--
  }
  return carry !== 0 ? carry + str : str
}
console.log(addStrings('9999', '1'));

