/*
 * @lc app=leetcode.cn id=456 lang=typescript
 *
 * [456] 132模式
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//重做--参考自己-AVL
//也可以使用栈

// @lc code=start
function find132pattern(nums: number[]): boolean {
  const avl = new AVLTree()
  const map = new Map()
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
    avl.insert(num)
  }

  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    if (map.get(num) === 1) {
      avl.remove(num)
    }
    map.set(num, map.get(num) - 1)
    const pre = avl.getPre(num)
    if (pre && min < pre.val && pre.val < num) {
      return true
    }
    min = Math.min(min, num)
  }

  return false
};
// @lc code=end

