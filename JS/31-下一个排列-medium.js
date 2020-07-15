/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * 参考--从后往前-前数大于后数-再翻转
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length === 0) return

  let index = nums.length - 2
  while (index >= 0 && nums[index + 1] <= nums[index]) {
    index--
  }

  if (index >= 0) {
    let j = nums.length - 1
    while (j >= 0 && nums[j] <= nums[index]) {
      j--
    }
    swap(nums, index, j)
  }

  for (let i = index + 1, j = nums.length - 1; i < j; i++, j--) {
    swap(nums, i, j)
  }
  return
}
function swap(list, i, j) {
  ;[list[i], list[j]] = [list[j], list[i]]
}
// @lc code=end

nextPermutation([1, 1])
