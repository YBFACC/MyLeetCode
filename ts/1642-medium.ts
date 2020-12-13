/*
 * @lc app=leetcode.cn id=1642 lang=typescript
 *
 * [1642] 可以到达的最远建筑
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//提示--优先队列+堆--攒高度差-最大差用梯子

// @lc code=start
function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const heap = new Heap<number>([], (a: number, b: number) => a <= b)
  let i = 0
  const Len = heights.length
  let count = 0
  for (; i < Len - 1; i++) {
    const dis = heights[i + 1] - heights[i]
    if (dis < 0) continue
    heap.insert(dis)
    count += dis
    if (count > bricks) {
      if (ladders < 1) { break }
      while (!heap.isEmpty() && count > bricks) {
        const max = heap.extract() as number
        count -= max
        ladders--
      }
    }
  }
  return i
};
// @lc code=end

furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19],
  10, 2)