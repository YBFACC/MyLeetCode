/*
 * @lc app=leetcode.cn id=795 lang=javascript
 *
 * [795] 区间子数组个数
 */

// @lc code=start

/**
 * 参考--统计每个区间的个数
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function (A, L, R) {
  let count = 0
  let left = -1
  let last = -1
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= R) {
      if (A[i] >= L) {
        last = i
      }
      count += last - left
    } else {
      last = i
      left = i
    }
  }
  return count
}

numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8)
