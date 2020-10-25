/*
 * @lc app=leetcode.cn id=1004 lang=typescript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
//提示--滑动窗口
function longestOnes(A: number[], K: number): number {
  let count = 0
  let left = 0
  let right = 0
  const Len = A.length
  let res = 0
  while (right < Len) {
    if (A[right] === 0) count++
    if (count > K) {
      while (count > K && left < right) {
        if (A[left] === 0) count--
        left++
      }
      res = Math.max(res, right - left)
    } else {
      res = Math.max(res, right - left + 1)
    }
    right++
  }
  return res
};
// @lc code=end
//0
longestOnes([0, 0, 0, 0], 0)
//10
longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
//6
longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)