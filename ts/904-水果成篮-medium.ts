/*
 * @lc app=leetcode.cn id=904 lang=typescript
 *
 * [904] 水果成篮
 */

// @lc code=start
//自己--滑动窗口
function totalFruit(tree: number[]): number {
  if (tree.length === 0) return 0
  let left = 0
  let right = 0
  const Len = tree.length
  let res = 1
  const set = new Set()
  const map = new Map()
  while (right < Len) {
    const next = tree[right]
    set.add(next)
    map.set(next, map.has(next) ? map.get(next) + 1 : 1)
    res = Math.max(res, right - left)
    while (set.size > 2) {
      const temp = tree[left]
      map.set(temp, map.get(temp) - 1)
      if (map.get(temp) === 0) {
        set.delete(temp)
      }
      left++
    }

    right++
  }
  res = Math.max(res, right - left)
  return res
};
// @lc code=end

totalFruit([0, 1, 2, 2])

totalFruit([1, 2, 3, 2, 2])

totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])
