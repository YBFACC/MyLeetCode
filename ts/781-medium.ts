/*
 * @lc app=leetcode.cn id=781 lang=typescript
 *
 * [781] 森林中的兔子
 */

//自己--key的几倍

// @lc code=start
function numRabbits(answers: number[]): number {
  const map = new Map()
  for (const item of answers) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  let count = 0
  for (const [key, value] of map) {
    const _key = key + 1
    count += Math.ceil(value / _key) * _key
  }
  return count
};
// @lc code=end

numRabbits([3,3,3,3,3])