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


//参考--拓扑排序
//富有->贫穷
//富有推向贫穷，每次只要和当前富有的安静值比较

function loudAndRich1(richer: number[][], quiet: number[]): number[] {
  const map = new Map()
  const N = quiet.length
  const indegree = new Int32Array(N)
  for (const [rich, poor] of richer) {
    if (!map.has(rich)) map.set(rich, [])
    map.get(rich).push(poor)
    indegree[poor]++
  }
  const queue = []
  for (let i = 0; i < N; i++) {
    if (indegree[i] === 0) {
      queue.push(i)
    }
  }
  const res = Array.from({ length: N }, (v, k) => k)

  while (queue.length > 0) {
    let size = queue.length
    while (size > 0) {
      const curr = queue.shift() as number
      if (map.has(curr)) {
        const poor_list = map.get(curr)
        for (const poor of poor_list) {
          if (quiet[res[poor]] > quiet[res[curr]]) {
            res[poor] = res[curr]
          }
          --indegree[poor]
          if (indegree[poor] === 0) queue.push(poor)
        }
      }
      size--
    }
  }

  return res
};


loudAndRich1([[0, 2], [1, 2]],
  [0, 1, 2])

loudAndRich1([[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]],
  [3, 2, 5, 4, 6, 1, 7, 0])


