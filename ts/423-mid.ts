/*
 * @Author: yubingfeng
 * @Date: 2021-11-24 16:50:16
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-11-26 10:00:21
 * @Description: 参考--对字母进行统计
 */

function originalDigits(s: string): string {
  const list = Array.from({ length: 10 }, () => 0)
  const map = new Map()
  for (const char of s) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1)
  }
  let res = ''
  list[0] = map.get('z') || 0
  list[2] = map.get('w') || 0
  list[4] = map.get('u') || 0
  list[6] = map.get('x') || 0
  list[8] = map.get('g') || 0

  list[3] = (map.get('h') || 0) - list[8]
  list[5] = (map.get('f') || 0) - list[4]
  list[7] = (map.get('s') || 0) - list[6]

  list[1] = (map.get('o') || 0) - list[0] - list[2] - list[4]
  list[9] = (map.get('i') || 0) - list[5] - list[6] - list[8]

  for (let i = 0; i < 10; i++) {
    res += i.toString().repeat(list[i])
  }

  return res
};

originalDigits("owoztneoer")