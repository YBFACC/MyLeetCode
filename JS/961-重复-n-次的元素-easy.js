/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */

// @lc code=start
/**
 * 自己--easy
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  let N = A.length / 2
  let map = new Map()
  for (let i = 0; i < A.length; i++) {
    map.set(A[i], map.has(A[i]) ? map.get(A[i]) + 1 : 1)
  }
  for (const [k, v] of map) {
    if (v === N) {
      return k
    }
  }
  return null
}
// @lc code=end

console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))
