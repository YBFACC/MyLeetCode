/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { ListNode } = require('../LeetCode-Class/index')

/**
 * 自己--还可以双指针优化
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  if (!head) return null
  const queue = []
  let count = 0
  while (head) {
    if (count === k) {
      queue.shift()
      count--
    }
    count++
    queue.push(head.val)
    head = head.next
  }
  return queue[0]
}

console.log(kthToLast(ListNode.create([1, 2, 3, 4, 5]), 2))
