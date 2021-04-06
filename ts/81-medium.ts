/*
 * @lc app=leetcode.cn id=81 lang=typescript
 *
 * [81] 搜索旋转排序数组 II
 */

//重做--提示--分类讨论--递归
//与上一次做的代码不一样，但是使用的条件一样，更换了条件的主次
//核心还是递归缩小范围

// @lc code=start
function search(nums: number[], target: number): boolean {
  if (nums.length === 0) return false
  if (nums.length === 1) return nums[0] === target
  if (nums[0] === target || nums[nums.length - 1] === target) return true
  let left = 0, right = nums.length - 1, end = nums[nums.length - 1]

  const mid = left + (right - left) >> 1
  if (nums[mid] === target) return true
  if (target < end) {
    if (nums[mid] < target) {
      return search(nums.slice(mid + 1), target)
    } else {
      return search(nums.slice(0, mid), target) || search(nums.slice(mid + 1), target)
    }
  } else {
    if (nums[mid] < target) {
      return search(nums.slice(0, mid), target) || search(nums.slice(mid + 1), target)
    } else {
      return search(nums.slice(0, mid), target)
    }
  }

};
// @lc code=end

console.log(search([2, 5, 6, 0, 0, 1, 2], 5))