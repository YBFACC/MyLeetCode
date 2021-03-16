
//重做--设定边界

function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0 || matrix[0].length === 0) return []
  const res = [], Row = matrix.length, Col = matrix[0].length
  let up = 0, down = Row - 1, left = 0, right = Col - 1

  while (true) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[up][i])
    }
    if (++up > down) break;
    for (let i = up; i <= down; i++) {
      res.push(matrix[i][right])
    }
    if (--right < left) break;
    for (let i = right; i >= left; i--) {
      res.push(matrix[down][i])
    }
    if (--down < up) break;
    for (let i = down; i >= up; i--) {
      res.push(matrix[i][left])
    }
    if (++left > right) break;
  }
  return res
};