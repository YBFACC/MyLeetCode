/**
 * 自己--竖式乘法--核心思想～～转化为数字---性能一遍
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  var toAdd = []
  var addZERO = ''
  for (let i = num2.length - 1; i >= 0; i--) {
    let str = ''
    let carry = 0
    for (let j = num1.length - 1; j >= 0; j--) {
      let product = ~~num1[j] * ~~num2[i] + carry
      if (carry !== 0) carry = 0
      carry = Math.trunc(product / 10)
      str = product - carry * 10 + str
    }
    if (carry !== 0) {
      toAdd.push(carry + str + addZERO)
    } else {
      toAdd.push(str + addZERO)
    }
    addZERO += '0'
  }
  var res = toAdd[0]
  for (let i = 1; i < toAdd.length; i++) {
    let item = toAdd[i]
    let reslen = res.length - 1
    let itemlen = item.length - 1
    let carry = 0
    let temp = ''
    while (reslen >= 0 || itemlen >= 0) {
      let sum = ~~res[reslen] + ~~item[itemlen] + carry
      if (carry !== 0) carry = 0
      if (sum > 9) {
        sum -= 10
        carry++
      }
      temp = sum + temp
      reslen--
      itemlen--
    }
    carry !== 0 ? (temp = carry + temp) : null
    res = temp
  }

  return res
}
multiply('123', '456')
