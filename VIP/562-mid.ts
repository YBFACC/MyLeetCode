
//copy--暴力所有线

function longestLine(M: number[][]): number {
  if (M.length === 0 || M[0].length == 0) return 0
  let rowLen = M.length, colLen = M[0].length
  let res = 0;
  //行遍历
  for (let i = 0; i < rowLen; i++) {
    let last = -1;
    for (let j = 0; j < colLen; j++) {
      if (M[i][j]) {
        res = Math.max(res, j - last);
      } else {
        last = j;
      }
    }
  }
  //列遍历
  for (let j = 0; j < colLen; j++) {
    let last = -1;
    for (let i = 0; i < rowLen; i++) {
      if (M[i][j]) {
        res = Math.max(res, i - last);
      } else {
        last = i;
      }
    }
  }
  //对角线
  let x = colLen - 1, y = 0;
  while (!(x == 0 && y == colLen - 1)) {
    let i = x, j = y;
    let cnt = 0;
    while (i < rowLen && j < colLen) {
      if (M[i][j]) {
        cnt++;
        res = Math.max(cnt, res);
      } else {
        cnt = 0;
      }
      i++;
      j++;
    }
    if (x) {
      x--;
    } else {
      y++;
    }
  }
  //反对角线
  x = 0, y = 0;
  while (!(x == rowLen - 1 && y == colLen - 1)) {
    let i = x, j = y;
    let cnt = 0;
    while (i >= 0 && j < colLen) {
      if (M[i][j]) {
        cnt++;
        res = Math.max(res, cnt);
      } else {
        cnt = 0;
      }
      i--;
      j++;
    }
    if (x < rowLen - 1) {
      x++;
    } else {
      y++;
    }
  }
  return res;
}

longestLine(
  [[0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1]])
