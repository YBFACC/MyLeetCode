/*
 * @lc app=leetcode.cn id=1394 lang=typescript
 *
 * [1394] 找出数组中的幸运数
 */

//easy

// @lc code=start
function findLucky(arr: number[]): number {
  const map = new Map()
  for (const num of arr) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  }
  for (let i = 500; i > 0; i--) {
    if (map.get(i) === i) return i
  }

  return -1
};
// @lc code=end

console.log(findLucky([1, 2, 2, 3, 3, 3]))