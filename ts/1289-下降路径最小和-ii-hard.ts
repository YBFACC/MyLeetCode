/*
 * @lc app=leetcode.cn id=1289 lang=typescript
 *
 * [1289] 下降路径最小和  II
 */

//自己--粉刷房子2

// @lc code=start
function minFallingPathSum(arr: number[][]): number {
  const Len = arr.length
  const width = arr[0].length
  let minNum = 0
  let secondNum = 0
  let minIndex = -1
  for (const list of arr) {
    const temp = [-1, Infinity, Infinity]
    for (let i = 0; i < width; i++) {
      const floor = (i == minIndex ? secondNum : minNum) + list[i]
      if (floor < temp[1]) {
        temp[2] = temp[1]
        temp[1] = floor
        temp[0] = i
      } else if (floor < temp[2]) {
        temp[2] = floor
      }
    }
    minIndex = temp[0]
    minNum = temp[1]
    secondNum = temp[2]
  }

  return Math.min(minNum, secondNum)
};
// @lc code=end

minFallingPathSum([[1, 2, 3]])