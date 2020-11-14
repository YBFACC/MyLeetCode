/*
 * @lc app=leetcode.cn id=220 lang=typescript
 *
 * [220] 存在重复元素 III
 */

import { AVLTree } from "../moban/AVLTree";

//参考--AVL树得到窗口中的Pre和Next

// @lc code=start
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  if (nums.length === 0 || k === 0) return false
  const avl = new AVLTree()
  const map = new Map()
  const Len = nums.length
  avl.insert(nums[0])
  map.set(nums[0], 1)
  let sum = 0
  for (let i = 1; i < Len; i++) {
    const curr = nums[i]
    const isHas = avl.search(curr)
    const pre = avl.getPre(curr)
    const next = avl.getNext(curr)
    if (isHas) {
      return true
    }
    if (pre && curr - pre.val <= t) {
      return true
    }
    if (next && next.val - curr <= t) {
      return true
    }

    avl.insert(curr)

    if (avl.length > k) {
      avl.remove(nums[i - k])
    }
    //如果有2个相同值，他的绝对值必满足<=t
    //所有i，j在k的范围内，不需要去重
    // sum++
    // map.set(curr, map.has(curr) ? map.get(curr) + 1 : 1)
    // if (sum >= k) {
    //   const target = nums[i - k]
    //   if (map.get(target) === 1) {
    //     avl.remove(target)
    //   }
    //   map.set(target, map.get(target) - 1)
    //   sum--
    // }
  }

  return false
};
// @lc code=end

console.log(containsNearbyAlmostDuplicate([0, 6, 0, 5], 3, 5))

//F
console.log(containsNearbyAlmostDuplicate([1, 2], 0, 1))
//F
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))
//T
console.log(containsNearbyAlmostDuplicate([0, 5, 0], 2, 4))
//T
console.log(containsNearbyAlmostDuplicate([10, 100, 11, 9], 1, 2))
//T
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
//T
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))