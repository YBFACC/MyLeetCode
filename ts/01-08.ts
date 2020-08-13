/**
 * 参考--不开空间-第一行/列进行标记
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rowLimit = matrix.length
  const colLimit = matrix[0].length
  let isFirstRowHasZero = false
  let isFirstColHasZero = false

  for (let i = 0; i < rowLimit; i++) {
    if (matrix[i][0] === 0) {
      isFirstColHasZero = true
    }
  }
  for (let j = 0; j < colLimit; j++) {
    if (matrix[0][j] === 0) {
      isFirstRowHasZero = true
    }
  }

  for (let i = 1; i < rowLimit; i++) {
    for (let j = 1; j < colLimit; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  for (let i = 1; i < rowLimit; i++) {
    for (let j = 1; j < colLimit; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if (isFirstRowHasZero) {
    for (let j = 0; j < colLimit; j++) {
      matrix[0][j] = 0
    }
  }
  if (isFirstColHasZero) {
    for (let i = 0; i < rowLimit; i++) {
      matrix[i][0] = 0
    }
  }
  return
}

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
])
