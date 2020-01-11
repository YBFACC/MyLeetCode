/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = []
  var func = function(curr, nums, index, res) {
    if (index == nums.length && curr.length == 0) {
      res.push([])
      return
    } else if (index == nums.length) {
      let temp = curr.split(',').map(x => parseInt(x)).sort()
      if (res.find(e=>JSON.stringify(e)===JSON.stringify(temp))) {
        return
      } else {
        res.push(temp)
        return
      }
    }
    if (curr.length < 1) {
      func(curr + nums[index], nums, index + 1, res)
      func(curr, nums, index + 1, res)
    } else {
      func(curr + ',' + nums[index], nums, index + 1, res)
      func(curr, nums, index + 1, res)
    }
  }
  func([], nums, 0, res)
  return res
}

let nums = [4,4,4,1,4]
console.log(new subsetsWithDup(nums))
