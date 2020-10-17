/*
 * @lc app=leetcode.cn id=1292 lang=typescript
 *
 * [1292] 元素和小于等于阈值的正方形的最大边长
 */

// @lc code=start
//自己--存储单行前缀和--试探边长大->小--蹭过
function maxSideLength(mat: number[][], threshold: number): number {
  const RowMax = mat.length
  if (RowMax === 0) return 0
  const ColMax = mat[0].length
  const max = Math.min(RowMax, ColMax)

  const prefix: number[][] = []
  for (let i = 0; i < RowMax; i++) {
    const temp = [0]
    for (let j = 0; j < ColMax; j++) {
      temp.push(temp[temp.length - 1] + mat[i][j])
    }
    prefix.push(temp)
  }

  for (let length = max; length > 0; length--) {
    for (let i = 0; i + length <= RowMax; i++) {
      for (let j = 0; j + length <= ColMax; j++) {
        if (helper(i, j, length)) {
          return length
        }
      }
    }
  }
  function helper(x: number, y: number, length: number): boolean {
    let sum = 0
    for (let i = x; i < x + length; i++) {
      sum += prefix[i][y + length] - prefix[i][y]
    }
    return sum <= threshold
  }
  return 0
};
// @lc code=end

console.log(maxSideLength(
  [
    [1, 1, 3, 2, 4, 3, 2],
    [1, 1, 3, 2, 4, 3, 2],
    [1, 1, 3, 2, 4, 3, 2]
  ], 4))

console.log(maxSideLength(
  [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], 1))

console.log(maxSideLength(
  [[1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]], 6))