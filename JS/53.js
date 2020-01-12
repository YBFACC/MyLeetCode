/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var res = nums[0]
  for (let i = 0; i < nums.length; i++) {
    let temp = 0
    for (let j = i; j < nums.length; j++) {
      temp += nums[j]
      res = Math.max(res, temp)
    }
  }
  return res
}

var nums=[-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(nums)