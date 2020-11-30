/*
 * @lc app=leetcode.cn id=767 lang=typescript
 *
 * [767] 重构字符串
 */

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//提示--堆+贪心

// @lc code=start
type item = [string, number]

function reorganizeString(S: string): string {
  if (S.length === 0) return ''
  const map = new Map()
  for (const s of S) {
    map.set(s, map.has(s) ? map.get(s) + 1 : 1)
  }
  const heap = new Heap<item>([], (a: item, b: item) => {
    if (a[1] === b[1]) {
      return a[0] <= b[0]
    }
    return a[1] <= b[1]
  })
  map.forEach((v, k) => {
    heap.insert([k, v])
  })
  let res = ''

  const start = heap.extract() as item
  res += start[0]
  start[1]--
  heap.insert(start)
  for (let i = 1; i < S.length; i++) {
    const temp: item[] = []
    let floor!: item
    while (!heap.isEmpty()) {
      floor = heap.extract() as item
      if (floor[0] === res[res.length - 1]) {
        temp.push(floor)
      } else {
        break
      }
    }
    if (floor[0] === res[res.length - 1]) {
      return ''
    }
    res += floor[0]
    floor[1]--
    if (floor[1] > 0) {
      heap.insert(floor)
    }
    while (temp.length > 0) {
      heap.insert(temp.pop() as item)
    }
  }

  return res
};
// @lc code=end

reorganizeString("aaab")