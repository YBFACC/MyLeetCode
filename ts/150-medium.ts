/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

//自己--栈-逆波兰表达式

// @lc code=start
function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  for (const token of tokens) {
    const temp = +token
    if (isNaN(temp)) {
      const second = stack.pop()
      const first = stack.pop()
      switch (token) {
        case '+':
          stack.push(first + second)
          break;
        case '-':
          stack.push(first - second)
          break;
        case '*':
          stack.push(first * second)
          break;
        case '/':
          stack.push(Math.trunc(first / second))
          break;
      }
    } else {
      stack.push(temp)
    }
  }
  return stack[0]
};
// @lc code=end

