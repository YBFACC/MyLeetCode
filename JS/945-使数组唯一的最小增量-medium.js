/*
 * @lc app=leetcode.cn id=945 lang=javascript
 *
 * [945] 使数组唯一的最小增量
 */

// @lc code=start
/**
 * 自己--排序+贪心--性能可以
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  let list = []
  A.sort((a, b) => a - b)
  list.push(A[0])
  let res = 0
  for (let i = 1; i < A.length; i++) {
    let num = list[list.length - 1]
    if (A[i] > num) {
      list.push(A[i])
    } else {
      res += num - A[i] + 1
      list.push(num + 1)
    }
  }
  return res
}
// @lc code=end
minIncrementForUnique([3, 2, 1, 2, 1, 7])
