/*
 * @lc app=leetcode.cn id=1846 lang=typescript
 *
 * [1846] 减小和重新排列数组后的最大元素
 */

//自己--小顶堆
//简单的贪心

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start
function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  if (arr.length === 1) return 1
  const minHeap = new Heap<number>(arr)
  let res = 1
  minHeap.extract()
  while (minHeap.length) {
    let floor = minHeap.extract() as number
    if (floor > res + 1) {
      floor = res + 1
    }
    res = Math.max(res, floor)
  }
  return res
};
// @lc code=end
maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5])
maximumElementAfterDecrementingAndRearranging([100, 1, 1000])
maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1])