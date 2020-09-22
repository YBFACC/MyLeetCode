//copy--为了吃烧烤，水的打卡题
function diagonalSum(mat: number[][]): number {
  let a = 0
  let b = mat.length - 1
  let res = 0
  while (a <= b) {
    if (a == b) {
      res += mat[a][a]
    } else {
      res += mat[a][a] + mat[a][b] + mat[b][a] + mat[b][b]
    }
    a++
    b--
  }
  return res
};
