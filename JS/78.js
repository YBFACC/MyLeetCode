/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = []
  var func = function(curr, nums, index, res) {
    if(index == nums.length&&curr.length==0){
      res.push([])
      return
    }
    if (index == nums.length) {
      res.push(curr.split(",").map(x=>parseInt(x)))
      return
    }
    if(curr.length<1){
      func(curr + nums[index], nums, index + 1, res)
      func(curr, nums, index + 1, res)
    }else{
      func(curr +","+ nums[index], nums, index + 1, res)
      func(curr, nums, index + 1, res)
    }
      
    
  }
  func([], nums, 0, res)
  return res
}
let nums = [-1, 2, 3]
console.log(new subsets(nums))
