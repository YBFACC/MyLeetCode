
//参考--dp--可改为一维

function longestLine(M: number[][]): number {
  if (M == null || M.length == 0 || M[0].length == 0)
    return 0;
  let ans = 0;
  const Row = M.length
  const Col = M[0].length
  const x = Array.from({ length: Row }, () => Array.from({ length: Col }, () => 0))
  const y = Array.from({ length: Row }, () => Array.from({ length: Col }, () => 0))
  const x_y = Array.from({ length: Row }, () => Array.from({ length: Col }, () => 0))
  const y_x = Array.from({ length: Row }, () => Array.from({ length: Col }, () => 0))
  for (let i = 0; i < Row; i++) {
    for (let j = 0; j < Col; j++) {
      if (M[i][j] === 0) {
        x[i][j] = 0
        y[i][j] = 0
        x_y[i][j] = 0
        y_x[i][j] = 0
      } else {
        x[i][j] = j > 0 ? x[i][j - 1] + 1 : 1
        y[i][j] = i > 0 ? y[i - 1][j] + 1 : 1
        x_y[i][j] = i > 0 && j > 0 ? x_y[i - 1][j - 1] + 1 : 1
        y_x[i][j] = i > 0 && j < Col - 1 ? y_x[i - 1][j + 1] + 1 : 1
      }
      ans = Math.max(ans, x[i][j]);
      ans = Math.max(ans, y[i][j]);
      ans = Math.max(ans, x_y[i][j]);
      ans = Math.max(ans, y_x[i][j]);
    }
  }
  return ans;
};

longestLine(
  [[1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 0, 1]])