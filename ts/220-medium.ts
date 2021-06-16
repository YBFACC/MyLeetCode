/*
 * @lc app=leetcode.cn id=220 lang=typescript
 *
 * [220] 存在重复元素 III
 */

//参考--AVL树
//在一个k的区间内，小于nums[i]的最大值，大于nums[i]的最小值

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  if (nums.length === 0 || k === 0) return false
  const avl = new AVLTree()
  const Len = nums.length
  avl.insert(nums[0])
  for (let i = 1; i < Len; i++) {
    const Has = avl.search(nums[i])
    const pre = avl.getPre(nums[i])
    const next = avl.getNext(nums[i])

    if (Has) {
      return true
    }
    if (pre && nums[i] - pre.val <= t) {
      return true
    }
    if (next && next.val - nums[i] <= t) {
      return true
    }

    avl.insert(nums[i])
    if (avl.length > k) {
      avl.remove(nums[i - k])
    }
  }
  return false
};
// @lc code=end

