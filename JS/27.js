/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === val) {
      nums.splice(index, 1)
      index--
    }
  }
  return nums.length
}
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
