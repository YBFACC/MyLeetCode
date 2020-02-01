// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//   var arr = s.split('')
//   var temp = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
//       temp.push(arr[i])
//     }
//     if (arr[i] === ')' || arr[i] === ']' || arr[i] === '}') {
//     }
//   }
//   return
// }

/**
 * 参考---简单粗暴--性能差
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var len = s.length
  while (len-1) {
    s = s.replace('()', '')
    s = s.replace('[]', '')
    s = s.replace('{}', '')
    len--
  }
  return s.length === 0
}
console.log(isValid('()(]'))
