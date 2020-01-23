/**
 * 自己想复杂了---不过熟悉了下iterator
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var res = 0
  var temp = 0
  var iterator = nums.entries()
  for (const e of iterator) {
    if (e[1] === 1) {
      temp++
    } else {
      temp = 0
    }
    res = Math.max(res, temp)
  }
  return res
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var res = 0
  var temp = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      temp++
    } else {
      temp = 0
    }
    res = Math.max(res, temp)
  }
  return res
}
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
