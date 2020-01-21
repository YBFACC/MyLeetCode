/**
 * ----参考----简单题没想到---时间性能棒---空间一般
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  var min = A[0]
  var max = A[0]
  for (let i = 1; i < A.length; i++) {
    min > A[i] ? (min = A[i]) : null

    max < A[i] ? (max = A[i]) : null
  }
  return max - min > K * 2 ? max - min - 2 * K : 0
}

console.log(smallestRangeI([0, 10], 2))
