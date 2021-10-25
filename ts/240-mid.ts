/*
 * @Author: yubingfeng
 * @Date: 2021-10-25 10:50:52
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-25 13:46:56
 * @Description: 提示--从左下角开始遍历-不需要考虑单行从左往右走的情况
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  const Row = matrix.length, Col = matrix[0].length
  let x = Row - 1, y = 0
  while (x >= 0 && y < Col) {
    if (matrix[x][y] === target) return true
    if (matrix[x][y] < target) {
      y++
    } else {
      x--
    }
  }
  return false
};

searchMatrix([
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
  , 20)