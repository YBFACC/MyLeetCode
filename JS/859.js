/**
 * 自己---js 中string不可以改变--性能好
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) return false
  if (A === B) {
    for (let i = 0; i < A.length; i++) {
      if (A.lastIndexOf(A[i]) !== i) {
        return true
      }
    }
  }
  var charA = []
  var charB = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      charA.push(A[i])
      charB.push(B[i])
    }
    if (charA.length > 2) return false
  }

  return charA.join('') === charB.reverse().join('') && charA.length === 2
}
console.log(buddyStrings('aaaabbaac', 'aaaacaabb'))
