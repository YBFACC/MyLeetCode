
//重做--改54新做法

function generateMatrix(n: number): number[][] {
  const res: number[][] = Array.from({ length: n }, () => [])
    , Row = n, Col = n
  let up = 0, down = Row - 1, left = 0, right = Col - 1
  let index = 0
  while (n-- > 0) {
    for (let i = left; i <= right; i++) {
      res[up][i] = ++index
    }
    up++
    for (let i = up; i <= down; i++) {
      res[i][right] = ++index
    }
    right--
    for (let i = right; i >= left; i--) {
      res[down][i] = ++index
    }
    down--
    for (let i = down; i >= up; i--) {
      res[i][left] = ++index
    }
    left++
  }
  return res
};
generateMatrix(1)