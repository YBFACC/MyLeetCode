/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
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

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var res = nums[0]
  var curr = nums[0]
  for (let i = 1; i < nums.length; i++) {
    curr=Math.max(nums[i],curr+nums[i])
    res=Math.max(res,curr)
  }
  return res
}

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));

