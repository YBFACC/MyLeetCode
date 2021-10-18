/*
 * @Author: yubingfeng
 * @Date: 2021-10-18 08:59:20
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-18 09:28:56
 * @Description: 自己--二进制-可以用lowbit
 */
// function findComplement(num: number): number {
//   const temp = num.toString(2)
//   let res = ''
//   for (let i = 0; i < temp.length; i++) {
//     res += temp[i] === '1' ? '0' : '1'
//   }
//   return parseInt(res, 2)
// };

//lowbit求最高位
function findComplement(num: number): number {
  let res = 0
  for (let i = num; i != 0; i = i & (i - 1)) {
    res = i
  }
  return ~num & (res - 1)
};


console.log(findComplement(50))