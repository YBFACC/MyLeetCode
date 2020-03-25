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
