/**
 * 自己--秒杀
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  if (numbers.length === 0) return null
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) {
      return numbers[i]
    }
  }
  return numbers[0]
}
