/**
 * 参考---双按位非（NOT）将“”变0--性能好
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var lenA = a.length - 1,
    lenB = b.length - 1
  var res = ''
  var curr = 0
  while (lenA >= 0 || lenB >= 0) {
    sum = ~~a[lenA] + ~~b[lenB] + curr
    if (curr !== 0) curr = 0
    if (sum > 1) {
      sum -= 2
      curr++
    }
    res = sum + res
    lenA--
    lenB--
  }
  return curr ? curr + res : res
}


/**
 * copy
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// const addBinary = (a, b) => {
//   let str = ''
//   let i = a.length -1, j = b.length -1
//   let dight = 0, cary = 0, sum = 0
//   while (i >= 0 || j >= 0) {
//     sum = ~~a[i] + ~~b[j] + cary
//     dight = sum % 2
//     cary = (sum - dight) / 2
//     str = dight + str
//     i--
//     j--
//   }
//   return cary ? cary + str : str
// }
console.log(addBinary('1', '11'))
