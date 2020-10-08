/*
 * @lc app=leetcode.cn id=1413 lang=typescript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
//自己--前缀和中动最小值
function minStartValue(nums: number[]): number {
  let min = 1
  const Len = nums.length
  let sum = 0
  for (let i = 0; i < Len; i++) {
    sum += nums[i]
    min = Math.min(min, sum)
  }
  return min < 1 ? 1 - min : min
};
// @lc code=end

//1
console.log(minStartValue([2, 3, 5, -5, -1]))
//1
console.log(minStartValue([1, 2]))