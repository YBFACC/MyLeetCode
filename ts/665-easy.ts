/*
 * @lc app=leetcode.cn id=665 lang=typescript
 *
 * [665] 非递减数列
 */

//自己-正反2次遍历--保持非递减

// @lc code=start
function checkPossibility(nums: number[]): boolean {
  return help1(nums.slice()) || help2(nums)
};

function help1(nums: number[]): boolean {
  if (nums.length === 1) return true
  let count = 1
  const Len = nums.length
  for (let i = 0; i < Len - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      nums[i + 1] = nums[i]
      count--
    }
  }
  if (nums[Len - 1] < nums[Len - 2]) {
    count--
  }
  return count >= 0
}

function help2(nums: number[]): boolean {
  if (nums.length === 1) return true
  let count = 1
  const Len = nums.length
  for (let i = Len - 1; i > 0; i--) {
    if (nums[i] < nums[i - 1]) {
      nums[i - 1] = nums[i]
      count--
    }
  }
  if (nums[0] > nums[1]) {
    count--
  }
  return count >= 0
}
// @lc code=end

console.log(checkPossibility([4, 2, 3]))