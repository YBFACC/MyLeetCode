/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * 参考--类全排列
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
  let list = []
  for (let i = 0; i < input.length; i++) {
    let oper = input[i]
    if (/\W/.test(oper)) {
      var left = diffWaysToCompute(input.slice(0, i))
      var right = diffWaysToCompute(input.slice(i + 1))
      for (let n = 0; n < left.length; n++) {
        for (let m = 0; m < right.length; m++) {
          switch (oper) {
            case '+':
              list.push(left[n] + right[m])
              break
            case '-':
              list.push(left[n] - right[m])
              break
            case '*':
              list.push(left[n] * right[m])
              break
          }
        }
      }
    }
  }
  if (list.length === 0) {
    list.push(parseInt(input))
  }
  return list
}
// @lc code=end

console.log(diffWaysToCompute('2*3-4*5'))
