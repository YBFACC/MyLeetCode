/*
 * @Author: yubingfeng
 * @Date: 2021-11-04 08:57:32
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-11-04 09:07:51
 * @Description: 自己--可以二分优化
 */
function isPerfectSquare(num: number): boolean {
  let index = 1, product = index * index
  const Max = (2 ** 31 - 1)
  while (product <= num && product <= Max) {
    product = index * index
    if (product === num) return true
    index++
  }
  return false
};