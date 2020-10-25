/*
 * @lc app=leetcode.cn id=845 lang=typescript
 *
 * [845] 数组中的最长山脉
 */

// @lc code=start
//参考--双指针--基本思路
function longestMountain(A: number[]): number {

  let res = 0
  const Len = A.length
  for (let i = 1; i < Len - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      let left = i - 1
      let right = i + 1
      while (left > 0 && A[left - 1] < A[left]) {
        left--
      }
      while (right < Len - 1 && A[right] > A[right + 1]) {
        right++
      }
      res = Math.max(res, right - left + 1)
    }
  }

  return res
};

// @lc code=end

longestMountain([2, 2, 2])

longestMountain([2, 1, 4, 7, 3, 2, 5])