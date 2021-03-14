/*
 * @lc app=leetcode.cn id=227 lang=typescript
 *
 * [227] 基本计算器 II
 */

//重做-参考--栈-先处理乘除再加减

// @lc code=start
function calculate(s: string): number {
  s = s.trim()
  const stack: number[] = []
  let preSign = '+'
  let num = 0
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(+s[i]) && s[i] !== ' ') {
      num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
    }
    if (isNaN(+s[i]) || i === s.length - 1) {
      switch (preSign) {
        case '+':
          stack.push(num)
          break;
        case '-':
          stack.push(-num)
          break;
        case '*':
          stack.push(stack.pop() as number * num)
          break;
        default:
          stack.push(Math.trunc(stack.pop() as number / num))
      }
      preSign = s[i]
      num = 0
    }
  }
  let res = 0
  while (stack.length) {
    res += stack.pop() as number
  }
  return res
};
// @lc code=end

calculate("14-3/2")
