/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * 自己--中心拓展法
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let res = 0
  if (A.length === 0 || B.length === 0) return 0
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        f(i, j)
      }
    }
  }
  function f(i, j) {
    let temp = 1
    while (
      i - temp >= 0 &&
      j - temp >= 0 &&
      i + temp < A.length &&
      j + temp < B.length &&
      A[i - temp] === B[j - temp] &&
      A[i + temp] === B[j + temp]
    ) {
      temp++
    }

    let temp2 = 1
    while (
      i - temp2 >= 0 &&
      j - temp2 >= 0 &&
      i + temp2 - 1 < A.length &&
      j + temp2 - 1 < B.length &&
      A[i - temp2] === B[j - temp2] &&
      A[i + temp2 - 1] === B[j + temp2 - 1]
    ) {
      temp2++
    }

    res = Math.max(res, (temp - 1) * 2 + 1, (temp2 - 1) * 2)
  }
  return res
}
// @lc code=end

findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])
