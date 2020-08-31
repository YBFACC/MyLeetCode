/*
 * @lc app=leetcode.cn id=382 lang=typescript
 *
 * [382] 链表随机节点
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
//参考--蓄水池抽样法
//保证在第i项进来后，选中的概率平均1/i

class Solution {
  head: ListNode | null
  constructor(head: ListNode | null) {
    this.head = head
  }

  getRandom(): number {
    const Limit = 1
    let res = new Array(Limit)
    let head = this.head
    for (let i = 0; i < res.length; i++) {
      res[i] = head?.val
    }

    for (let i = Limit; head !== null; i++) {
      const r = Math.floor(Math.random() * i)
      if (r < Limit) {
        res[r] = head.val
      }
      head = head.next
    }
    return res[0]
  }
}

// @lc code=end

