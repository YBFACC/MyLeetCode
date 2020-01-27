/**
 * 参考---列方程解
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  var AliceCurr = A.reduce((pre, curr) => pre + curr)
  var BobCurr = B.reduce((pre, curr) => pre + curr)
  var temp = (BobCurr - AliceCurr) / 2
  for (let i = 0; i < A.length; i++) {
    if (B.includes(temp + A[i])) {
      return [A[i], temp + A[i]]
    }
  }
  return -1
}

console.log(fairCandySwap([1, 1], [2, 2]))
