/*
 * @lc app=leetcode.cn id=376 lang=typescript
 *
 * [376] 摆动序列
 */

// @lc code=start
//参考--dp--N^2
//使用2个数组分别记录up和down
//up和down冒泡更新
function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2) return nums.length
  const Len = nums.length
  const up: number[] = Array.from({ length: Len }, () => 0)
  const down: number[] = Array.from({ length: Len }, () => 0)

  for (let i = 1; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        up[i] = Math.max(up[i], down[j] + 1)
      } else if (nums[i] < nums[j]) {
        down[i] = Math.max(down[i], up[j] + 1)
      }
    }
  }

  return Math.max(up[Len - 1], down[Len - 1]) + 1
};
// @lc code=end

console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
