/*
 * @lc app=leetcode.cn id=451 lang=typescript
 *
 * [451] 根据字符出现频率排序
 */

//自己--排序

// @lc code=start
function frequencySort(s: string): string {
  const map: Map<string, number> = new Map()

  for (const _s of s) {
    map.set(_s, map.has(_s) ? map.get(_s) + 1 : 1)
  }

  const list = [...map.keys()]
  list.sort((a, b) => map.get(b) - map.get(a))
  let res = ''
  for (const item of list) {
    res += item.repeat(map.get(item))
  }

  return res
};
// @lc code=end

