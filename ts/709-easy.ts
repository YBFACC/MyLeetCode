/*
 * @Author: yubingfeng
 * @Date: 2021-12-12 21:43:13
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-12-12 21:48:12
 * @Description: 自己
 * 大写变小写、小写变大写 : 字符 ^= 32;
 * 大写变小写、小写变小写 : 字符 |= 32;
 * 小写变大写、大写变大写 : 字符 &= -33;
 */

function toLowerCase(s: string): string {
  return s.toLowerCase()
};

console.log(toLowerCase('123ABdc'))