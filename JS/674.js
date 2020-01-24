/**
 * 自己---性能ok
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  var len = nums.length
  if (len === 0) return 0
  var res = 1
  var temp = 1
  for (let i = 1; i < len; i++) {
    if (nums[i - 1] >= nums[i]) {
      temp = 1
      if (i > len / 2) break
      continue
    }
    temp++
    res = Math.max(res, temp)
  }
  return res
}
findLengthOfLCIS([2, 2, 2, 2, 2])
