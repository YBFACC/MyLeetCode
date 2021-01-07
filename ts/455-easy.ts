/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--贪心--胃口大的，先分

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => b - a)
  const heap = new Heap(s, (a: number, b: number) => {
    return a <= b
  })
  let res = 0
  for (const child of g) {
    if (heap.length > 0 && heap.topValue() >= child) {
      heap.extract()
      res++
    }
  }
  return res
};
// @lc code=end

findContentChildren([1, 2, 3], [1, 1])