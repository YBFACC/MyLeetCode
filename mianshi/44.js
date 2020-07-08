/**
 * 复习--规律题
 * 0~9=>9
 * 10~99=>90*2+9=>189
 * 100~999=>900
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  if (n < 10) return n
  let length = 0
  let cut = 9
  let i = 1
  while (n > length + cut * i) {
    length += cut * i
    i++
    cut *= 10
  }
  let num = Math.trunc((n - length - 1) / i) + Math.pow(10, i - 1) + ''
  let index = (n - length - 1) % i
  return num[index]
}
console.log(findNthDigit(232323))
