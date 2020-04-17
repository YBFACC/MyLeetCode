/**
 * 参考--双指针向内推进--性能一般
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let sum = nums[left] + nums[right]
    if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    } else {
      return [nums[left], nums[right]]
    }
  }
  return null
}
