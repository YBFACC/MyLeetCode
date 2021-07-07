/*
 * @lc app=leetcode.cn id=1711 lang=typescript
 *
 * [1711] 大餐计数
 */

//自己--排列组合

// @lc code=start

const all = [
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024,
  2048,
  4096,
  8192,
  16384,
  32768,
  65536,
  131072,
  262144,
  524288,
  1048576,
  2097152
]

function countPairs(deliciousness: number[]): number {
  const map = new Map()
  for (const item of deliciousness) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  const keys = [...map.keys()]
  keys.sort((a, b) => a - b)
  let res = 0
  const set = new Set(keys)
  for (const num_2 of all) {
    for (let item of keys) {
      //做差，在set中查找
      let diff = num_2 - item
      if (set.has(diff)) {
        if (item === diff) {
          //排列公式，从n个取出2个
          res += map.get(item) * (map.get(item) - 1) / 2
        } else {
          res += map.get(item) * map.get(diff) / 2
        }
      }
      res %= 1000000007
    }
  }
  return res
};
// @lc code=end

countPairs([1, 1, 1, 1, 1, 1, 3, 3, 3, 7])