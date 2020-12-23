
/*
 * @lc app=leetcode.cn id=826 lang=typescript
 *
 * [826] 安排工作以达到最大收益
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--优先队列+贪心
//难度最低--利润最大

// @lc code=start
interface obj {
  dif: number,
  pro: number
}
function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
  const heap = new Heap<obj>([], (a: obj, b: obj) => {
    if (a.pro === b.pro) {
      a.dif >= b.dif
    }
    return a.pro <= b.pro
  })
  for (let i = 0; i < profit.length; i++) {
    heap.insert({ dif: difficulty[i], pro: profit[i] })
  }
  let res = 0
  worker.sort((a, b) => b - a)
  for (const work of worker) {
    while (!heap.isEmpty() && heap.topValue().dif > work) {
      heap.extract()
    }
    if (!heap.isEmpty()) {
      res += heap.topValue().pro
    }
  }
  return res
};
// @lc code=end

maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])