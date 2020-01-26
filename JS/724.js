/**
 * 参考---前缀和---性能可以
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  var sum = nums.reduce((pre, curr) => pre + curr,0)
  var leftcurr = 0
  for (let i = 0; i < nums.length; i++) {
    if (leftcurr === sum - leftcurr - nums[i]) {
      return i
    }
    leftcurr += nums[i]
  }
  return -1
}

console.log(pivotIndex([1, 2, 3]))
