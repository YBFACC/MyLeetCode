/*
 * @Author: yubingfeng
 * @Date: 2021-10-14 10:51:40
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-14 11:33:01
 * @Description: 自己-竖式乘法
 */
function _divide(dividend: number, divisor: number): string {
  let strdividend = dividend + ''
  let res = ''
  const dfs = function (index: number, surplus: string) {
    if (index >= strdividend.length) return
    let temp_num = +(surplus + strdividend[index])
    let _res = Math.trunc(temp_num / divisor)
    let _surplus = temp_num % divisor
    res += _res
    dfs(index + 1, _surplus + '')
  }
  dfs(0, '')

  return res
};


function divide(dividend: number, divisor: number): number {
  let temp: number
  if (dividend < 0 && divisor < 0) {
    temp = +_divide(-dividend, -divisor)
  } else if (dividend < 0 && divisor > 0) {
    temp = -_divide(-dividend, divisor)
  } else if (dividend > 0 && divisor < 0) {
    temp = -_divide(dividend, -divisor)
  } else {
    temp = +_divide(dividend, divisor)
  }
  return temp > 2147483647 ? 2147483647 : temp
};

console.log(divide(-21473648, - 12))