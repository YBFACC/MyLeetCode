/*
 * @lc app=leetcode.cn id=457 lang=typescript
 *
 * [457] 环形数组循环
 */

// @lc code=start
//自己--双指针--向前试探
function circularArrayLoop(nums: number[]): boolean {

  const Len = nums.length
  for (let i = 0; i < Len; i++) {
    let start = i
    let end = helper(i + nums[i])
    let positive = nums[i] > 0
    let distance = 0
    while (((nums[end] > 0) === positive) && end !== start && distance <= Len) {
      distance++
      end = helper(end + nums[end])
    }
    if (end === start && distance >= 1) return true
  }

  function helper(num: number): number {
    while (num < 0) {
      num += Len
    }
    while (num >= Len) {
      num -= Len
    }
    return num
  }
  return false
};
// @lc code=end
console.log(circularArrayLoop([-2, -17, -1, -2, -2]))
console.log(circularArrayLoop([3, 1, 2]))
console.log(circularArrayLoop([-1, -2, -3, -4, -5]))
console.log(circularArrayLoop([2, -1, 1, 2, 2]))
console.log(circularArrayLoop([-1, 2]))

console.log(circularArrayLoop([-2, 1, -1, -2, -2]))