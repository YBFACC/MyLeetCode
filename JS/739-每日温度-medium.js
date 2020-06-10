/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * 自己--单调栈
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  if (T.length === 0) return []

  let list = new Array(T.length).fill(0)
  let stack = [0]
  for (let i = 1; i < T.length; i++) {
    let curr = T[i]
    while (stack.length > 0) {
      let old = stack[stack.length - 1]
      if (T[old] < curr) {
        stack.pop()
        list[old] = i - old
        continue
      }
      break
    }
    stack.push(i)
  }
  return list
}
// @lc code=end

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
