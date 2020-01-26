/**
 * 自己---双指针--性能一般
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  var start = -1
  var res = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== S[i+1] || i === S.length - 1) {
      i - start >= 3 ? res.push([start+1 , i]) : null
      start = i
    }
  }
  return res
}
largeGroupPositions('xxx')
