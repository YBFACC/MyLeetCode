/*
 * @lc app=leetcode.cn id=1838 lang=typescript
 *
 * [1838] 最高频元素的频数
 */

//参考--二分+前缀和

// @lc code=start
function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  const Len = nums.length
  const sum = Array.from({ length: Len }, () => 0)
  sum[0] = nums[0]
  for (let i = 1; i < Len; i++) {
    sum[i] = sum[i - 1] + nums[i]
  }
  let res = 0
  for (let i = 0; i < Len; i++) {
    let left = 0, right = i, temp = -1
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      //注意下面的求值，容易出错
      const _sum = sum[i] - (mid > 0 ? sum[mid - 1] : 0)
      const all = nums[i] * (i - mid + 1)
      if (all - _sum <= k) {
        right = mid - 1
        temp = mid
      } else {
        left = mid + 1
      }
      if (temp !== -1) res = Math.max(res, i - temp + 1)
    }
  }
  return res
}
// @lc code=end

maxFrequency([3, 9, 6], 2)