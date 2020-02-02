/**
 * 自己---回溯递归--求单个第n的数量---性能差
 * 参考后---再递归countNumbersWithUniqueDigits(n - 1)
 *
 * @param {number} n
 * @return {number}
 */

var countNumbersWithUniqueDigits = function(n) {
  if (n === 1) return 10
  else if (n === 0) return 1
  var sum = Math.pow(10, n)
  var func = function(temporary, index) {
    if (index > n) {
      return
    }
    for (let i = 0; i < 10; i++) {
      if (temporary.includes(i) || (index === 1 && i == 0)) {
        sum -= Math.pow(10, n - index)
      } else {
        temporary.push(i)
        index++
        func(temporary, index)
        temporary.pop()
        index--
      }
    }
  }
  func([], 1)
  return sum + countNumbersWithUniqueDigits(n - 1)
}

console.log(countNumbersWithUniqueDigits(3))
