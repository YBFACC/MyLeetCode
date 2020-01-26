/**
 * 自己---性能棒
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  A.forEach(e => e.reverse())
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      A[i][j] === 0 ? (A[i][j] = 1) : (A[i][j] = 0)
    }
  }
  return A
}

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])
