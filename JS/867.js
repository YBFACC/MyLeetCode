/**
 * 参考---性能好
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  var res = Array.from({length:A[0].length},()=>[])
  A.forEach(row=>{
    row.forEach((v,k)=>{
      res[k].push(v)
    })
  })
  return res
}

transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])

// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]
