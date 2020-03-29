/**
 * 自己--秒杀
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0
  while (n > 0) {
    n & 1 ? res++ : null
    n = n >>> 1
  }
  return res
}

