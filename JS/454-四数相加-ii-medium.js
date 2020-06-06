/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * 参考--4数转化为2数
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let map = {}
  for (const a of A) {
    for (const b of B) {
      if (map[a + b]) {
        map[a + b]++
      } else {
        map[a + b] = 1
      }
    }
  }
  let count = 0
  for (const c of C) {
    for (const d of D) {
      let temp = map[0 - c - d]
      if (temp) {
        count += temp
      }
    }
  }
  return count
}
// @lc code=end
fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])
