/**
 * 自己💪--正则--性能一般
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  var count = 0
  for (let i = 1; i <= N; i++) {
    let str = i.toString()
    if (str.search(/[347]/) === -1) {
      if (str.search(/[2569]/) !== -1) {
        count++
      }
    }
  }
  return count
}
rotatedDigits(100)
