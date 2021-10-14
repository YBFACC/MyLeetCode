/*
 * @Author: yubingfeng
 * @Date: 2021-10-14 10:42:42
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-14 10:50:14
 * @Description: 自己--硬做
 */

function fizzBuzz(n: number): string[] {
  const list = []
  for (let i = 1; i <= n; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      list.push("FizzBuzz")
    } else if (i % 3 === 0) {
      list.push("Fizz")
    } else if (i % 5 === 0) {
      list.push("Buzz")
    } else {
      list.push(i + '')
    }
  }
  return list
};