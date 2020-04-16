/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * copy--函数清晰--i++
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length <= 0 || matrix[0].length <= 0){
      return []
  }
  let xlen = matrix.length;
  let ylen = matrix[0].length;
  let result = [];
  let all = xlen * ylen;
  function goRight(now){
      for(let j = now; j <= ylen - 1 - now; j++){
          if(result.length == all){
              return;
          }
          result.push(matrix[now][j]);
      }
  }
  function goDown(now){
      for(let j = now+1; j < xlen - 1 - now; j++){
          if(result.length == all){
              return;
          }
          result.push(matrix[j][ylen-1-now])
      }
  }
  function goLeft(now){
      for(let j = ylen-1-now; j > now; j--){
          if(result.length == all){
              return;
          }
          result.push(matrix[xlen - 1 - now][j])
      }
  }
  function goUp(now){
      for(let j = xlen - 1 - now; j > now; j--){
          if(result.length == all){
              return;
          }
          result.push(matrix[j][now])
      }
  }
  let now = 0;
  while(result.length < all){
      goRight(now);
      goDown(now);
      goLeft(now);
      goUp(now);
      now++;
  }
  return result;
};

// @lc code=end
/**
 * 自己--转死了--b
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return []
  let list = []
  let m = matrix.length
  let n = matrix[0].length
  let minM = 0
  let minN = 0
  while (m >= minM || n >= minN) {
    let row = minM
    let col = minN

    while (col < n - 1) {
      list.push(matrix[row][col])
      col++
    }
    while (row < m - 1) {
      list.push(matrix[row][col])
      row++
    }

    while (col >= minM + 1) {
      list.push(matrix[row][col])
      col--
    }
    while (row >= minN + 1) {
      list.push(matrix[row][col])
      row--
    }
  }
  return list
}
spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])

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
