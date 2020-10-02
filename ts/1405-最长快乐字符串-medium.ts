import { type } from "os";
/*
 * @lc app=leetcode.cn id=1405 lang=typescript
 *
 * [1405] 最长快乐字符串
 */

import { Heap_list } from "../moban/heap";
//自己--贪心--优先弹出字母数多的
// @lc code=start
type heap_item = [number, string]

function longestDiverseString(a: number, b: number, c: number): string {
  let res = ""
  const heap = new Heap_list<heap_item>()
  heap.insert([a, 'a'])
  heap.insert([b, 'b'])
  heap.insert([c, 'c'])

  let no_end = true
  while (no_end) {
    no_end = false
    let temp = []
    for (let i = 1; i <= 3; i++) {
      const item = heap.extract() as heap_item
      if (res[res.length - 1] !== item[1] && item[0] > 0) {
        if (item[0] >= 2 && 
          temp.length == 0//贪心--上一次弹出和这一次弹出相同-为了使字符串尽可能的长-不加2个，加1个--尽可能将字母数多的用完
          ) {
          res += item[1]
          item[0]--
        }
        item[0]--
        res += item[1]
        no_end = true
        temp.push(item)
        break
      }
      temp.push(item)
    }
    while (temp.length > 0) {
      heap.insert(temp.pop() as heap_item)
    }
  }
  return res
};
// @lc code=end
//ccbccbbccbbccbbccbc
//ccbccbbccbbccbbccbc
console.log(longestDiverseString(0, 8, 11))

console.log(longestDiverseString(1, 1, 7))

console.log(longestDiverseString(2, 2, 1))

console.log(longestDiverseString(7, 1, 0))