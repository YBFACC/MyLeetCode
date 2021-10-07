/*
 * @Author: yubingfeng
 * @Date: 2021-10-07 18:40:20
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-07 19:05:03
 * @Description: 参考--注意单词的定义，按空格划分
 */
function countSegments(s: string): number {
  let res = 0
  const Len = s.length
  for (let i = 0; i < Len;) {
    if (s[i] === ' ') {
      i++
      continue
    }
    while (s[i] !== ' ' && i < Len) {
      i++
    }
    res++
  }
  return res
};
