/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  var res = []
  var hash = new Map()
  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], i)
  }
  for (let j = 1; j <= nums.length; j++) {
    if (!hash.has(j)) {
      res.push(j)
    }
  }
  return res
}

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
