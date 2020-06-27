/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * 自己--题目已经提示使用栈
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length === 0) return 0
  let stack = []
  while (tokens.length > 0) {
    let curr = tokens.shift()
    if (/\d+/.test(curr)) {
      stack.push(curr)
    } else {
      let num1 = stack.pop()
      let num2 = stack.pop()
      let sum = Math.trunc(eval(num2 + ' ' + curr + ' ' + num1))
      stack.push(sum)
    }
  }
  return stack.pop()
}
// @lc code=end

console.log(evalRPN(['4', '-2', '/', '2', '-3', '-', '-']))
