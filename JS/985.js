/**
 * 自己--按题目硬写---时间性能差
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  var res = []
  for (let i = 0; i < queries.length; i++) {
    let index = queries[i][1]
    let val = queries[i][0]
    A[index] += val
    var test = A.reduce((pre, curr) => {
      if ((curr & 1) !== 1) {
        pre += curr
      }
      return pre
    },0)
    res.push(test)
  }
  return res
}
sumEvenAfterQueries(
  [1, 2, 3, 4],
  [
    [1, 0],
    [-3, 1],
    [-4, 0],
    [2, 3]
  ]
)
