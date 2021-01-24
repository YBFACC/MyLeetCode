/*
 * @lc app=leetcode.cn id=870 lang=typescript
 *
 * [870] 优势洗牌
 */

//自己--优先队列或者二分查找

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start

function advantageCount(A: number[], B: number[]): number[] {
  const heapA = new Heap<number>(A, (a: number, b: number) => {
    return a <= b
  })
  const heapB = new Heap<number[]>([], (a: number[], b: number[]) => {
    return a[0] <= b[0]
  })

  for (let i = 0; i < B.length; i++) {
    heapB.insert([B[i], i])
  }
  const temp: number[] = []
  const res: number[] = []
  while (!heapB.isEmpty()) {
    const b = heapB.extract() as number[]
    if (b[0] >= heapA.topValue()) {
      temp.push(b[1])
      continue
    }
    const a = heapA.extract() as number
    res[b[1]] = a
  }
  for (const index of temp) {
    res[index] = heapA.extract() as number
  }

  return res
};
// @lc code=end

advantageCount([12, 24, 8, 32], [13, 25, 32, 11])

advantageCount([2, 7, 11, 15], [1, 10, 4, 11])