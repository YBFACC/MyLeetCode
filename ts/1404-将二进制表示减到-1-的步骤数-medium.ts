/*
 * @lc app=leetcode.cn id=1404 lang=typescript
 *
 * [1404] 将二进制表示减到 1 的步骤数
 */

// @lc code=start
//自己--模拟流程-来回倒水
function numSteps(s: string): number {
  let res = 0
  const list = s.split('')

  while (list.length > 1) {
    const Len = s.length
    const curr = list.pop()
    if (curr !== '0') {
      const stack: string[] = []
      while (list.length > 0 && list[list.length - 1] === '1') {
        stack.push(list.pop() as string)
      }
      list.pop()
      list.push('1')
      while (stack.length > 0) {
        stack.pop()
        list.push('0')
      }
      list.push('0')
    }
    res++
  }

  return res
};
// @lc code=end
numSteps("10")

numSteps("1101")