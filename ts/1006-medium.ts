/*
 * @lc app=leetcode.cn id=1006 lang=typescript
 *
 * [1006] 笨阶乘
 */

//参考--栈
//累积在数组中

// @lc code=start
function clumsy(N: number): number {
  if (N === 1) return 1
  const stack = [N--]

  let index = 0
  while (N > 0) {
    if (index % 4 === 0) {
      let temp = stack.pop() as number
      stack.push(N * temp)
    } else if (index % 4 === 1) {
      let temp = stack.pop() as number
      stack.push(Math.trunc(temp / N))
    } else if (index % 4 === 2) {
      stack.push(N)
    } else {
      stack.push(-N)
    }
    index++
    N--
  }

  let sum = 0
  stack.forEach((v, k) => sum += v)
  return sum
};
// @lc code=end

clumsy(4)
