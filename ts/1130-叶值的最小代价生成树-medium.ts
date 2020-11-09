/*
 * @lc app=leetcode.cn id=1130 lang=typescript
 *
 * [1130] 叶值的最小代价生成树
 */

//参考--单调栈
//越大的值，深度应该越浅--达到目标值最小

// @lc code=start
function mctFromLeafValues(arr: number[]): number {
  let sum = 0
  let stack = []
  for (const num of arr) {
    while (stack.length > 1 && stack[stack.length - 1] < num) {
      sum += getMinSum(stack.pop() as number,
        Math.min(num, stack[stack.length - 1]))
    }
    if (stack.length === 1 && stack[stack.length - 1] < num) {
      sum += getMinSum(stack.pop() as number,
        num)
    }
    stack.push(num)
  }
  while (stack.length > 1) {
    sum += getMinSum(stack.pop() as number,
      stack[stack.length - 1])
  }
  return sum
};

function getMinSum(a: number, b: number): number {
  return a * b
}
// @lc code=end

//56
mctFromLeafValues([3, 2, 5, 7])

mctFromLeafValues([6, 2, 4])

//500
mctFromLeafValues([15, 13, 5, 3, 15])