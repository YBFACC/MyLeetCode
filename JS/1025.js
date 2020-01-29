/**
 * 自己--规律总结--性能棒
 * 
 * 若当前为偶数，直接占2，赢；

若当前为奇数，奇数的约数只能是奇数或者 1，因此下一个一定是偶数；

因此，奇则输，偶则赢。
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  return N % 2 == 0
}
