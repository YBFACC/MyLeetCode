/**
 * 自己---动态规划---性能好
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]
  var res = [1, 1]
  for (let i = 1; i < rowIndex; i++) {
    let temp = [1]
    for (let j = 1; j < res.length; j++) {
      temp.push(res[j] + res[j - 1])
    }
    temp.push(1)
    res = temp
  }
  return res
}
console.log(getRow(3));

