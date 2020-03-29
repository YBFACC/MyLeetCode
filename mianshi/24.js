/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 自己--list
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null
  let list = []
  while (head) {
    head && list.push(head)
    head = head.next
  }
  for (let i = list.length - 1; i >= 0; i--) {
    list[i].next = i === 0 ? null : list[i - 1]
  }
  return list[list.length - 1]
}

/**
 * 参考--双指针法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let pre = head
  let cur = null
  while (pre) {
    let temp = pre.next
    pre.next = cur
    cur = pre
    pre = temp
  }

  return cur
}
