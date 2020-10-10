/*
 * @lc app=leetcode.cn id=1299 lang=typescript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
//自己
function replaceElements(arr: number[]): number[] {
  let temp = []
  let tail = arr[arr.length - 1]
  const Len = arr.length
  for (let i = Len - 2; i >= 0; i--) {
    temp[i] = tail
    tail = Math.max(tail, arr[i])
  }
  temp.push(-1)
  return temp
};
// @lc code=end

replaceElements([17, 18, 5, 4, 6, 1])