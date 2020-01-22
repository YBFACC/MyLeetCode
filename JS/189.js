/**
 * 自己---性能一般
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
  return
}
rotate([1,2,3,4,5,6,7],3)