/*
 * @lc app=leetcode.cn id=851 lang=typescript
 *
 * [851] 喧闹和富有
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript } from 'lc-tool';

//提示--深搜+heap

// @lc code=start
function loudAndRich(richer: number[][], quiet: number[]): number[] {
  const map = new Map()
  const N = quiet.length
  for (const [rich, poor] of richer) {
    if (!map.has(poor)) map.set(poor, [])
    map.get(poor).push(rich)
  }

  const visited = new Map()
  const res = []
  for (let i = 0; i < N; i++) {
    res[i] = dfs(i)[0]
  }

  //[index,quiet]
  function dfs(index: number): number[] {
    if (!map.has(index)) return [index, quiet[index]]
    if (visited.has(index)) return visited.get(index)
    const heap = new Heap<number[]>([], (a: number[], b: number[]) => {
      if (a[1] === b[1]) {
        return a[0] >= b[0]
      }
      return a[1] >= b[1]
    })
    heap.insert([index, quiet[index]])
    const list = map.get(index)
    for (const item of list) {
      heap.insert(dfs(item))
    }
    const target = heap.topValue()
    visited.set(index, target)
    return target
  }

  return res
};
// @lc code=end

loudAndRich([[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]],
  [3, 2, 5, 4, 6, 1, 7, 0])