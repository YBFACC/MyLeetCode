
//自己--对角线搜索
//从左下到右上到搜索

function searchMatrix(matrix: number[][], target: number): boolean {
  const Row = matrix.length, Col = matrix[0].length
  let i = Row - 1, j = 0
  while (i >= 0 && j < Col) {
    if (matrix[i][j] === target) {
      return true
    }
    if (matrix[i][j] > target) {
      i--
    } else {
      j++
    }
  }
  return false
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))