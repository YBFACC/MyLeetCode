/*
 * @Author: yubingfeng
 * @Date: 2021-10-22 09:51:28
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-22 10:14:49
 * @Description: 自己--简单处理下进位
 */

function plusOne(digits: number[]): number[] {
  const Len = digits.length
  let index = Len - 1
  let carry = 1
  while (carry === 1) {
    if (index < 0) {
      digits.unshift(1)
      break
    }
    if (digits[index] === 9) {
      digits[index] = 0
    } else {
      digits[index]++
      carry = 0
    }
    index--
  }
  return digits
};

plusOne([9, 9, 9])