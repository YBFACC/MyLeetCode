/**
 * 自己--秒杀---性能可以
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  var maxnum = Number.MIN_VALUE
  for (let i = 0; i < nums.length; i++) {
    maxnum = Math.max(maxnum, nums[i])
  }
  var temp = nums.filter(v => v > maxnum / 2)
  return temp.length > 1 ? -1 : nums.indexOf(maxnum)
}

console.log(dominantIndex([3, 6, 1, 0]))
