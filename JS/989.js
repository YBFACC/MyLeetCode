/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  var a=A.join('')
  var res = parseInt(a,10)
  console.log("9007199254740992".length);
  var test = res.toString().split('')
  return test.map(e => parseInt(e, 10))
}

console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
)
