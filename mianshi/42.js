/**
 * 自己--dp
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (dp + nums[i] >= nums[i]) {
      dp += nums[i]
    } else {
      dp = nums[i]
    }
    max = Math.max(max, dp)
  }
  return max
}
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
