/**
 * 自己--傻子做法
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// var maximum = function (a, b) {
//   return Math.max(a, b)
// }

//copy--参考--二进制
var maximum = function (a, b) {
  console.log((-1 >>> 0).toString(2))

  return [a, b][(a - b) % 1e9 >>> 31]
}

console.log(maximum(2, 3))
