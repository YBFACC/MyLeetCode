/**
 * 参考--异或-与--实现加法
 * 5=>101
 * 17=>10001
 * 异或=>10100(是没有进位的加法)
 * 与=>00001(再左移1位=>到进位到位置)
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  if (b === 0) return a

  return add(a ^ b, (a & b) << 1)
}

console.log(add(10, 12))
