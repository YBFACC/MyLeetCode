/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * 参考--解构赋值好简洁-迭代不符合空间要求
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // 递归思想：
  if (!head || !head.next) return head
  //  1. 快慢针二分，前一半截断并获取后一半开始节点(奇数中间，偶数中前)
  let [slow, fast, mid] = [head, head.next, null]
  while (fast && fast.next) {
    ;[slow, fast] = [slow.next, fast.next.next]
  }
  ;[slow.next, mid] = [null, slow.next]
  // 2. 左右递归；
  let [left, right] = [sortList(head), sortList(mid)]
  // 3. 合并递归结果左右链表
  let curr = (res = new ListNode(null))
  while (left && right) {
    if (left.val < right.val) [curr.next, left] = [left, left.next]
    else [curr.next, right] = [right, right.next]
    curr = curr.next
  }
  curr.next = left ? left : right
  //  4. return 空节点.next;
  return res.next
}

// @lc code=end

function ListNode(val) {
  this.val = val
  this.next = null
}

let a1 = new ListNode(4)
let a2 = new ListNode(2)
let a3 = new ListNode(1)
let a4 = new ListNode(3)

a1.next = a2
a2.next = a3
a3.next = a4

sortList(a1)
