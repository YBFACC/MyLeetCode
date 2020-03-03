/**
 * 自己--每日一题--性能好
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  A.splice(m, n, ...B)
  A.sort((a, b) => a - b)
  return
}

