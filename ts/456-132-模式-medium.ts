/*
 * @lc app=leetcode.cn id=456 lang=typescript
 *
 * [456] 132模式
 */
import { AVLTree } from "../moban/AVLTree";

//自己--AVL树
//这题还有更好的解法--单调栈

// @lc code=start
function find132pattern(nums: number[]): boolean {
  const Len = nums.length
  let min = nums[0]
  const avl = new AVLTree()
  const map = new Map()
  for (let i = 1; i < Len; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
    avl.insert(nums[i])
  }
  for (let i = 1; i < Len; i++) {
    if (map.get(nums[i]) === 1) {
      avl.remove(nums[i])
    }
    map.set(nums[i], map.get(nums[i]) - 1)
    let pre = avl.getPre(nums[i])
    if (pre && min < pre.val && pre.val < nums[i]) {
      return true
    }
    min = Math.min(min, nums[i])
  }

  return false
};
// @lc code=end

console.log(find132pattern([1, 2, 3, 4]))