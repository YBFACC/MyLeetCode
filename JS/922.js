/**
 * 自己--奇偶双指针--用按位与判断奇偶提高效率--性能可以
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  var res = []
  var even = 0,
    odd = 1
  for (let index = 0; index < A.length; index++) {
    if ((A[index] & 1) === 0) {
      res[even] = A[index]
      even += 2
    } else {
      res[odd] = A[index]
      odd += 2
    }
  }
  return res
}

sortArrayByParityII([4, 2, 5, 7])
