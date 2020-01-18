/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  var res = []
  function cout(nums) {
    var temp = 0
    while (nums != 0) {
      nums = nums & (nums - 1)
      temp++
    }
    return temp
  }
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (cout(i) + cout(j) == num) {
        res.push(i + ':' + (j > 9 ? j : '0' + j))
      }
    }
  }

  return res
}

readBinaryWatch(0)
