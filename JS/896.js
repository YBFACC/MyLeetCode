/**
 * 参考---性能可以
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  var desc, asc
  for (let i = 0; i < A.length; i++) {
    if (A[i] < A[i + 1]) {
      asc = true
    } else if (A[i] > A[i + 1]) {
      desc = true
    }
    if (asc && desc) {
      return false
    }
  }
  return true
}
isMonotonic([1, 2, 4, 3])
