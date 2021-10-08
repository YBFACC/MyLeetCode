/*
 * @Author: yubingfeng
 * @Date: 2021-10-08 10:53:25
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-08 11:12:07
 * @Description: 自己--字符串查重
 */

function findRepeatedDnaSequences(s: string): string[] {
  const res: Set<string> = new Set()
  const set = new Set()
  const Len = s.length
  let str = s.slice(0, 10)
  set.add(str)
  for (let i = 10; i < Len; i++) {
    str = str.slice(1) + s[i]
    if (set.has(str)) {
      res.add(str)
      continue
    }
    set.add(str)
  }
  return [...res]
};

findRepeatedDnaSequences("AAAAAAAAAAAAA")
findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")