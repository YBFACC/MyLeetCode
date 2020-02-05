// /**
//  * 自己
//  * @param {string} s
//  * @return {number}
//  */
// var countBinarySubstrings = function(s) {
//   var res = 0
//   for (let i = 0; i < s.length; i++) {
//     let curr = 0
//     let one = true
//     let zero = true
//     for (let j = i; j < s.length; j++) {

//     }
//   }
//   return res
// }

// /**
//  * copy--正则--性能一般
//  * @param {string} s
//  * @return {number}
//  */
// let countBinarySubstrings = function (s) {
//   let n = 0, arr = s.match(/([1]+)|([0]+)/g)
//   for (let i = 0; i < arr.length - 1; i++) {
//     n += Math.min(arr[i].length, arr[i + 1].length)
//   }
//   return n
// }

let countBinarySubstrings = function(s) {
  let n = 0,
    pre = 0,
    curr = 1
  for (let i = 0, len = s.length; i < len - 1; i++) {
    if (s[i] == s[i + 1]) {
      curr++
    } else {
      pre = curr
      curr = 1
    }
    if (pre >= curr) n++
  }
  return n
}

countBinarySubstrings('00110011')
