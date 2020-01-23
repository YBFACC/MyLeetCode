/**
 * 自己--时空性能差
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  var temp = Array.from(nums).sort((a, b) => a - b)
  var leftIndex = 0
  var rightIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (temp[i] !== nums[i]) {
      leftIndex = i 
      break
    }
  }
  for (let i = nums.length; i >= 0; i--) {
    if (temp[i] !== nums[i]) {
      rightIndex = i + 1
      break
    }
  }
  return rightIndex - leftIndex
}

console.log(findUnsortedSubarray([2,6,4,8,10,9,15]))
