/*
 * @lc app=leetcode.cn id=1669 lang=typescript
 *
 * [1669] 合并两个链表
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

//自己--链表合并

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
  if (!list1) return list2
  const temp = new ListNode()
  temp.next = list1
  let index = 0
  let start = temp
  let end = temp

  while (list1 && index < a) {
    start = list1
    list1 = list1.next
    index++
  }
  while (list1 && index <= b) {
    end = list1
    list1 = list1.next
    index++
  }
  start.next = list2
  while (list2 && list2.next) {
    list2 = list2.next
  }
  list2 && (list2.next = end.next)
  return temp.next
};
// @lc code=end

mergeInBetween(ListNode.create([0, 1, 2, 3, 4, 5])
  , 3, 4,
  ListNode.create([1000000, 1000001, 1000002]))

mergeInBetween(ListNode.create([0, 1, 2, 3, 4, 5, 6])
  , 2, 5,
  ListNode.create([1000000, 1000001, 1000002, 1000003, 1000004]))