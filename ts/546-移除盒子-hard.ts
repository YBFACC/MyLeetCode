/*
 * @lc app=leetcode.cn id=546 lang=typescript
 *
 * [546] 移除盒子
 */

// @lc code=start
//参考--超时
//每次都需要on^2的时间复杂度太高了
function removeBoxes(boxes: number[]): number {
  function getMax(curBoxes: number[], curSum: number): number {
    if (curBoxes.length === 0) return curSum
    if (curBoxes.length === 1) return curSum + 1
    let max = 0
    for (let i = 0; i < curBoxes.length; i++) {
      let count = 0
      for (let j = i; j < curBoxes.length; j++) {
        if (curBoxes[i] === curBoxes[j]) count++
        const left = curBoxes.slice(0, i)
        const right = curBoxes.slice(j + 1)
        max = Math.max(max, getMax(left.concat(right), curSum + count * count))
      }
    }
    return max
  }

  return getMax(boxes, 0)
}
// @lc code=end
console.log(removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1]))
