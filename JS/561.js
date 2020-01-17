/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  var res = 0
  nums.sort((a, b) => a - b)
  for (var i = 0; i < nums.length; i++) {
    i % 2 == 0 ? (res += nums[i]) : null
  }
  return res
}
arrayPairSum([1, 4, 3, 2])
