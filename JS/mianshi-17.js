/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  let num = Math.pow(10, n)
  let arr = []
  for (let i = 1; i < num; i++) {
    arr.push(i)
  }
  return arr
}

printNumbers(2)