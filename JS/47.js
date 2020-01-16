/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
  var res = []
  var tmpPath = []
  var n = nums.length
  var hash = {}
  var func = function(tmpPath) {
    if (tmpPath.length == n) {
      res.push(tmpPath)
    }

    for (let i = 0; i < n; i++) {
      if (hash[i] || (i > 0 && !hash[i - 1] && nums[i - 1] == nums[i])) continue

      hash[i] = true
      tmpPath.push(nums[i])
      func(tmpPath.slice())
      tmpPath.pop()
      hash[i] = false
    }
  }
  func(tmpPath)
  return res
}
var nums = [1, 1, 2]
permuteUnique(nums)
