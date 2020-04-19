/*
 * @lc app=leetcode.cn id=466 lang=javascript
 *
 * [466] 统计重复个数
 */

// @lc code=start
/**
 * 看着题解敲
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  let index = 0
  let cnt = 0
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s1[j] === s2[index]) {
        index++
      }
      if (index === s2.length) {
        index = 0
        cnt++
      }
    }
  }
  return Math.trunc(cnt / n2)
}
// @lc code=end
