/**
 * 参考---暴力---性能可以
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  let sum = 0
  for (let k = i; k <= j; k++) {
    sum += this.nums[k]
  }
  return sum
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

/**
 * 参考---动态规划--空间性能差
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  let dp = [0]
  for (let i = 0; i < nums.length; i++) {
    dp.push(dp[i] + nums[i])
  }
  this.res = dp
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.res[j + 1] - this.res[i]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
