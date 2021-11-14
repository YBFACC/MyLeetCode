/*
 * @Author: yubingfeng
 * @Date: 2021-11-15 00:20:47
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-11-15 00:26:48
 * @Description: 参考--脑筋急转弯
 */
function maxCount(m: number, n: number, ops: number[][]): number {
  let maxRow = m, maxCol = n
  for (const [row, col] of ops) {
    maxRow = Math.min(maxRow, row)
    maxCol = Math.min(maxCol, col)
  }

  return maxRow * maxCol
};