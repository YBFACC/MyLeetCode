/*
 * @lc app=leetcode.cn id=659 lang=typescript
 *
 * [659] 分割数组为连续子序列
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//参考--优先队列+贪心

// @lc code=start
function isPossible(nums: number[]): boolean {
  const map: Map<number, Heap<number>> = new Map()
  for (const x of nums) {
    if (!map.has(x)) {
      map.set(x, new Heap())
    }
    if (map.has(x - 1)) {
      const temp = map.get(x - 1)?.extract() as number
      if (map.get(x - 1)?.isEmpty()) {
        map.delete(x - 1)
      }
      map.get(x)?.insert(temp + 1)
    } else {
      map.get(x)?.insert(1)
    }
  }

  for (const [k, v] of map.entries()) {
    if (v.topValue() < 3) return false
  }
  return true
};
// @lc code=end

console.log(isPossible([1, 2, 3, 4, 4, 5]))