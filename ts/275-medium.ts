/*
 * @lc app=leetcode.cn id=275 lang=typescript
 *
 * [275] H 指数 II
 */

//自己--第一题的简化版

// @lc code=start
function hIndex(citations: number[]): number {
  const Len = citations.length
  let left = 0, right = Len - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (citations[mid] >= citations.length - mid) right = mid
    else left = mid + 1
  }
  let h = Len - left
  return citations[left] >= h ? h : 0
};
// @lc code=end

