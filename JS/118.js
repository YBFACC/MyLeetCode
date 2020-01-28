/**
 * 自己---动态规划--性能差
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]
  var res = Array.from({ length: numRows }, () => [])
  res[0] = [1]
  res[1] = [1, 1]
  for (let i = 2; i < numRows; i++) {
    res[i].push(1)
    for (let j = 1; j < res[i - 1].length; j++) {
      res[i].push(res[i - 1][j] + res[i - 1][j - 1])
    }
    res[i].push(1)
  }
  return res
}


/**
 * copy--性能一般
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const array = [];
  for (let i = 1; i <= numRows; i++) {
      const row = [];
      for (let j = 0; j < i; j++) {
          if (j === 0 || j === i -1) {
              row.push(1);
          } else {
              row.push(array[i-2][j-1] + array[i-2][j]);
          }
      }
      array.push(row);
  }
  return array;
};