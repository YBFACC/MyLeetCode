/**
 * 自己---HashMap找出出现最多的数--性能还行
 * 写的最长的简单题
 *
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  var HashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    HashMap.set(nums[i], HashMap.has(nums[i]) ? 1 + HashMap.get(nums[i]) : 1)
  }
  var MaxNum = Number.MIN_VALUE
  var temp = []
  HashMap.forEach((v, k) => {
    if (v > MaxNum) {
      MaxNum = v
      temp.splice(0)
      temp.push(k)
    } else if (v === MaxNum) {
      temp.push(k)
    }
  })
  var res = Number.MAX_VALUE
  for (let j = 0; j < temp.length; j++) {
    let len = nums.lastIndexOf(temp[j]) - nums.indexOf(temp[j]) + 1
    res = Math.min(res, len)
  }

  return res
}
findShortestSubArray([1, 2, 2, 3, 1, 4, 2])
