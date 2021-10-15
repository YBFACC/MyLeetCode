/*
 * @Author: yubingfeng
 * @Date: 2021-10-15 08:48:49
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-15 09:12:07
 * @Description: 自己--正则字符串
 */
function countAndSay(n: number): string {
  let res = '1'
  for (let i = 1; i < n; i++) {
    let temp = ''
    const list = res.match(/0{1,}|1{1,}|2{1,}|3{1,}|4{1,}|5{1,}|6{1,}|7{1,}|8{1,}|9{1,}/g)
    for (const item of list) {
      temp += item.length + item[0]
    }
    res = temp
  }
  return res
};
countAndSay(4)