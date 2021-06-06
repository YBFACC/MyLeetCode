/*
 * @lc app=leetcode.cn id=525 lang=typescript
 *
 * [525] 连续数组
 */

//提示--前缀和+map
//0则-1，1则+1
//遇到相同值下标值相减

// @lc code=start
function findMaxLength(nums: number[]): number {
  let res = 0
  let count = 0
  const Len = nums.length
  const map = new Map()
  map.set(0, -1)

  for (let i = 0; i < Len; i++) {
    nums[i] === 0 ? count-- : count++
    if (map.has(count)) {
      res = Math.max(res, i - map.get(count))
    } else {
      map.set(count, i)
    }
  }

  return res
};
// @lc code=end

findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])