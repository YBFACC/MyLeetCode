/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 参考--交换下一个值即可
 * 将目标值与下一个节点的值交换，舍去目标节点的下一个节点
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}

deleteNode(ListNode.create([1, 2, 3]))
