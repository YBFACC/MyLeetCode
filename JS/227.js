/**
 * 参考思路--空间性能差---改后提升了时间性能
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let sign = s.match(/\+|\-|\*|\//g)
  let num = s.match(/\d+/g)
  let arr = []
  arr.push(num[0])
  for (let i = 1; i < num.length; i++) {
    if (sign[i - 1] === '+' || sign[i - 1] === '-') {
      arr.push(sign[i - 1])
      arr.push(num[i])
    } else if (sign[i - 1] === '*') {
      let temp = arr.pop()
      temp = temp * num[i]
      arr.push(temp)
    } else if (sign[i - 1] === '/') {
      let temp = arr.pop()
      temp = Math.trunc(temp / num[i])
      arr.push(temp)
    }
  }
  let count = Number(arr[0])
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === '+') {
      count += Number(arr[i + 1])
    } else if (arr[i] === '-') {
      count -= Number(arr[i + 1])
    }
  }
  return count
}
calculate('3+2*2-3/3*6+2')
