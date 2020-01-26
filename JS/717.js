/**
 * copy--性能一般--正则
 * @param {number[]} bits
 * @return {boolean}
 */
// var isOneBitCharacter = function(bits) {
//   return /^(10|11|0)*0$/.test(bits.join(''))
// }


var isOneBitCharacter = function(bits) {
  var i = 0
  while (i < bits.length - 1) {
    i += bits[i] + 1
  }
  return i === bits.length - 1
}

isOneBitCharacter([1,1,1,0])