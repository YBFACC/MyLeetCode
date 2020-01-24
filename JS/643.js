/**
 * 自己---滑动窗口---性能差
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  var res = nums.slice(0, 0 + k).reduce((pre, cur) => pre + cur) / k
  for (let i = 1; i <= nums.length - k; i++) {
    let temp = nums.slice(i, i + k)
    res = Math.max(res, temp.reduce((pre, cur) => pre + cur) / k)
  }

  return res
}

/**
 * copy---感觉是滑动窗口的性能改良
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0
  let max = -Number.MAX_VALUE
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      sum += nums[i]
    } else {
      sum = sum + nums[i] - nums[i - k]
    }
    if (i >= k - 1) {
      max = max > sum ? max : sum
    }
  }
  return max / k
}

findMaxAverage([1,12,-5,-6,50,3], 4)
