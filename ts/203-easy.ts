/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--递归

// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   if (!head) return head

//   if (head.val === val) {
//     return removeElements(head.next, val)
//   } else {
//     head.next = removeElements(head.next, val)
//     return head
//   }
// };


function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return head
  const tump = new ListNode(-1)
  tump.next = head
  let temp = tump
  while (temp.next) {
    if (temp.next.val === val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }
  return tump.next
};


// @lc code=end

console.log(removeElements(ListNode.create([1]), 2))

console.log(removeElements(ListNode.create([7, 7, 7, 7, 7]), 7))

console.log(removeElements(ListNode.create([1, 2, 6, 3, 4, 5, 6]), 6))
console.log()