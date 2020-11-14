/*
 * @lc app=leetcode.cn id=975 lang=typescript
 *
 * [975] 奇偶跳
 */
import { AVLTree } from "../moban/AVLTree";

//参考--AVL树--dp从后往前
//还可以单调栈

// @lc code=start
function oddEvenJumps(A: number[]): number {
  const avl = new AVLTree()
  const map = new Map()
  const Len = A.length
  const odd = Array.from({ length: Len }, () => false)
  const even = Array.from({ length: Len }, () => false)
  odd[Len - 1] = even[Len - 1] = true
  let res = 1
  map.set(A[Len - 1], Len - 1)
  avl.insert(A[Len - 1])
  for (let i = Len - 2; i >= 0; i--) {
    const curr = A[i]
    let isHas = avl.search(curr)
    let pre = avl.getPre(curr)
    let next = avl.getNext(curr)

    if (isHas) {
      odd[i] = even[map.get(curr)]
      even[i] = odd[map.get(curr)]
    } else {
      if (pre) even[i] = odd[map.get(pre.val)]
      if (next) odd[i] = even[map.get(next.val)]
    }
    avl.insert(curr)
    odd[i] ? res++ : null
    map.set(curr, i)
  }

  return res
};
// @lc code=end

//6
oddEvenJumps([1, 2, 3, 2, 1, 4, 4, 5])