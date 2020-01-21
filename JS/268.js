/**
 * 自己----性能一般
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

  var hash = {}
  for (let i = 0; i <= nums.length; i++) {
    hash[i] = true
  }
  for (let j = 0; j <= nums.length; j++) {
    hash[nums[j]] = false
  }
  for (let i = 0; i <= nums.length; i++) {
    if (hash[i] === true) {
      return i
    }
  }
}

/**
 * 参考---比自己-时间好空间差
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var temp = new Set(nums)
  for (let i = 0; i <= nums.length; i++) {
    if (!temp.has(i)) {
    return i
    }
  }
}

console.log(missingNumber([3,0,1]))
