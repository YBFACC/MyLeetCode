/*
 * @Author: yubingfeng
 * @Date: 2021-12-13 09:14:06
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-12-13 09:44:43
 * @Description: 自己--求行、列最大值的最小值
 */

function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const RowLen = grid.length, ColLen = grid[1].length
  const RowMax: number[] = [], COlMax: number[] = []
  grid.forEach((item, index) => [
    RowMax[index] = Math.max(...item)
  ])
  for (let j = 0; j < ColLen; j++) {
    let max = grid[0][j]
    for (let i = 1; i < RowLen; i++) {
      max = Math.max(max, grid[i][j])
    }
    COlMax[j] = max
  }
  let res = 0
  for (let i = 0; i < RowLen; i++) {
    for (let j = 0; j < ColLen; j++) {
      res += Math.min(RowMax[i], COlMax[j]) - grid[i][j]
    }
  }
  return res
};

maxIncreaseKeepingSkyline(
  [
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0]
  ])