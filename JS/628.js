/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b)
  var len=nums.length
  var first=nums[0]*nums[1]
  var end=nums[len-2]*nums[len-3]
  return first>end?first*nums[len-1]:end*nums[len-1]
}

console.log(maximumProduct([-4,-3,-2,-1,60]));

