/**
 * 参考--这转的头晕
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return []
  if (matrix.length === 1) return matrix[0]
  let res = []
  let xlen = matrix.length
  let ylen = matrix[0].length
  let max = matrix.length * matrix[0].length
  const shang = function(index) {
    for (let i = index; i <= ylen - index - 1; i++) {
      if (res.length < max) {
        res.push(matrix[index][i])
      }
    }
  }
  const you = function(index) {
    for (let i = index + 1; i < xlen - index - 1; i++) {
      if (res.length < max) {
        res.push(matrix[i][ylen - index - 1])
      }
    }
  }
  const xia = function(index) {
    for (let i = ylen - index - 1; i > index; i--) {
      if (res.length < max) {
        res.push(matrix[xlen - index - 1][i])
      }
    }
  }
  const zuo = function(index) {
    for (let i = xlen - index - 1; i > index; i--) {
      if (res.length < max) {
        res.push(matrix[i][index])
      }
    }
  }
  let index = 0
  while (res.length < max) {
    shang(index)
    you(index)
    xia(index)
    zuo(index)
    index++
  }
  return res
}

spiralOrder([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
])
