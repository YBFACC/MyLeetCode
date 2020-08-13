/**
 * 自己--使用额外空间
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const list: Array<Array<number>> = []
  const rowLimit = matrix.length
  const colLimit = matrix[0].length
  for (let i = 0; i < rowLimit; i++) {
    for (let j = 0; j < colLimit; j++) {
      if (matrix[i][j] === 0) {
        list.push([i, j])
      }
    }
  }
  while (list.length > 0) {
    let [row, col] = list.shift() as Array<number>
    for (let i = 0; i < colLimit; i++) {
      matrix[row][i] = 0
    }
    for (let i = 0; i < rowLimit; i++) {
      matrix[i][col] = 0
    }
  }
  return
}

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
])
