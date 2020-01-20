/**
 * 自己---时空性能👌
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var deletenum = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      i--
      deletenum++
    }
  }
  for (let j = 0; j < deletenum; j++) {
    nums.push(0)
  }
  return nums
}

/**
 * copy---官方推荐的双指针方法---性能不如自己写的
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var slow = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[slow]=nums[i]
      slow++
    }
  }
  for (let j = 0; j < nums.length-slow; j++) {
    nums[slow+j]=0
  }
  return
}

moveZeroes([0,1,0,3,12])
