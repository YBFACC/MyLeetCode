/**
 * 参考---左右两次遍历--性能一般
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  var ace = 0,
    decs = 0,
    len = A.length
  if (len < 3) return false
  for (let i = 0; i < len; i++) {
    if (A[i] < A[i + 1]) {
      ace++
    } else {
      break
    }
  }
  for (let j = len - 1; j >= 0; j--) {
    if (A[j] < A[j - 1]) {
      decs++
    } else {
      break
    }
  }
  if(ace===0||decs===0) return false
  return ace + decs === len - 1 ? true : false
}
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]))
