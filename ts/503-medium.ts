/*
 * @lc app=leetcode.cn id=503 lang=typescript
 *
 * [503] 下一个更大元素 II
 */

//自己--A+A循环拉直，单调栈

// @lc code=start
function nextGreaterElements(nums: number[]): number[] {
  const temp = [...nums, ...nums]
  const stack = [temp[temp.length - 1]]
  const res = []
  const Len = temp.length
  for (let i = Len - 2; i >= 0; i--) {
    const floor = temp[i]
    if (floor < stack[stack.length - 1]) {
      stack.push(floor)
      res[i] = stack[stack.length - 2]
    } else {
      while (stack.length > 1 && stack[stack.length - 1] <= floor) {
        stack.pop()
      }
      if (stack[stack.length - 1] <= floor) stack.pop()
      stack.push(floor)
      if (stack.length === 1) {
        res[i] = -1
      } else {
        res[i] = stack[stack.length - 2]
      }
    }
  }

  return res.slice(0, nums.length)
};
// @lc code=end

console.log(nextGreaterElements([1, 3, 4, 1, 3, 2, 5, 0]))