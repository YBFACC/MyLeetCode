/*
 * @Author: yubingfeng
 * @Date: 2021-11-08 22:22:31
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-11-08 23:34:43
 * @Description: 自己--统计值同、位同为A，值同位不同为B
 */

function getHint(secret: string, guess: string): string {
  const list1 = Array.from({ length: 10 }, () => 0)
  const list2 = Array.from({ length: 10 }, () => 0)
  let res = '', count = 0
  const Len = secret.length
  for (let i = 0; i < Len; i++) {
    if (secret[i] === guess[i]) {
      count++
    } else {
      list1[+secret[i]]++
      list2[+guess[i]]++
    }
  }
  res += count + "A"
  count = 0
  for (let i = 0; i < 10; i++) {
    count += Math.min(list1[i], list2[i])
  }
  res += count + 'B'
  return res
};

getHint("1123", "0111")