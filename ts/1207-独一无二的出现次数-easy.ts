/*
 * @lc app=leetcode.cn id=1207 lang=typescript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
//自己
function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map()
  for (const item of arr) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  const set = new Set()
  for (const v of map.values()) {
    if (set.has(v)) return false
    set.add(v)
  }
  return true
};
// @lc code=end

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))