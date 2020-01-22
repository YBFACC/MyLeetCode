/**
 * 自己---时间差
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let temp = numbers.lastIndexOf(target - numbers[i])
    if (temp !== -1) {
      return [i + 1, temp + 1]
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9))
