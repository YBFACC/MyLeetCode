/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  var res = []
  nums.sort((a, b) => a - b)
  var func = function(temp, curr) {
    if (curr == target) {
      res.push(temp.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (curr + nums[i] > target) continue
      temp.push(nums[i])
      func(temp, curr + nums[i])
      temp.pop()
    }
  }
  func([], 0)
  return res.length
}
combinationSum4([4,2,1], 32)
