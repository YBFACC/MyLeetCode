/**
 * 自己---秒杀---性能一般
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  var row = matrix.length
  var col = matrix[0].length
  if (row === 1 || col === 1) {
    return true
  }
  for (let i = 0; i < row - 1; i++) {
    for (let j = 0; j < col - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false
      }
    }
  }
  return true
}

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
  ])
)
