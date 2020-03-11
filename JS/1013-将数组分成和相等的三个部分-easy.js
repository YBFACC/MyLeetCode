/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * 自己--遍历--性能一般
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let count = 0
  A.forEach(item => (count += item))
  count /= 3
  let res = 0
  let sum = A[0]
  for (let i = 1; i <= A.length; i++) {
    if (sum === count) {
      sum = 0
      res++
    }
    sum += A[i]
  }
  return res >= 3
}
// @lc code=end
canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10])
