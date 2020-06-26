/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * 自己--当成2叉树模拟
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
  let num = 2 ** (N - 1) - 1 + K
  let list = [num]
  while (num > 1) {
    let temp = Math.floor(num / 2)
    list.unshift(temp)
    num = temp
  }
  let index = 1
  let res = 0
  while (index < list.length) {
    if (list[index - 1] * 2 !== list[index]) {
      res = res === 0 ? 1 : 0
    } else {
      res = res
    }
    index++
  }
  return res
}
// @lc code=end

kthGrammar(4, 5)
