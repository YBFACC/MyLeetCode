/*
 * @lc app=leetcode.cn id=376 lang=typescript
 *
 * [376] 摆动序列
 */

// @lc code=start
//参考--贪心--折线图-记录峰谷个数
function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2) return nums.length
  const Len = nums.length
  let res = 1
  let up = 0
  for (let i = 0; i < Len; i++) {
    if (nums[i] > nums[i - 1] && (up === 0 || up === -1)) {
      up = 1
      res++
    }
    if (nums[i] < nums[i - 1] && (up === 0 || up === 1)) {
      up = -1
      res++
    }
  }
  return res
};
// @lc code=end

console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
