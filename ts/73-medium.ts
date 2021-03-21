/**
 Do not return anything, modify matrix in-place instead.
 */
//自己--双重循环--标记
function setZeroes(matrix: number[][]): void {
  const m = matrix.length, n = matrix[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        helper(i, j)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === Infinity) {
        matrix[i][j] = 0
      }
    }
  }

  return
  function helper(a: number, b: number): void {
    for (let i = 0; i < n; i++) {
      if (matrix[a][i] !== 0)
        matrix[a][i] = Infinity
    }
    for (let i = 0; i < m; i++) {
      if (matrix[i][b] !== 0)
        matrix[i][b] = Infinity
    }
  }
};
setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])