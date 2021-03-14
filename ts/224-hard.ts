/*
 * @lc app=leetcode.cn id=224 lang=typescript
 *
 * [224] 基本计算器
 */

//自己--栈--括号优先级高

// @lc code=start
function calculate(s: string): number {
  if (s.length < 2) return +s
  const list = s.match(/\d+|\+|\-|\(|\)/g) as string[]
  const stack: string[] = []

  for (let i = 0; i < list.length; i++) {
    if (list[i] === ')') {
      let j = i - 1
      while (stack[j] !== '(') {
        j--
      }
      stack.push(helper(stack.splice(j, i - j)))
    } else {
      stack.push(list[i])
    }
  }
  return +helper(stack)
};
function helper(params: string[]): string {
  let preOp = 1
  let count = 0
  for (let i = 0; i < params.length; i++) {
    if (params[i] === '(' || params[i] === ')') continue
    if (isNaN(+params[i])) {
      if (params[i] === '+') {
        preOp = 1
      } else {
        preOp = 0
      }
    } else {
      count += preOp === 1 ? (+params[i]) : (-params[i])
    }
  }

  return '' + count
}
// @lc code=end

calculate("(1+(41+532+2)-31)+(6+88)")