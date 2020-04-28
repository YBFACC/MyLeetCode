/**
 * 参考--通过异或的1来区分成2个组
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let res = 0
  for (const num of nums) {
    res ^= num
  }
  let index = 0
  let num1, num2
  while ((res & 1) == 0) {
    index++
    res = res >> 1
  }
  for (const num of nums) {
    if (((num >> index) & 1) === 0) {
      num1 ^= num
    } else {
      num2 ^= num
    }
  }
  return [num1, num2]
}
