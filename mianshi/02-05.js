/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 自己--重做--链表操作
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0
  const _addTwoNumbers = (ln1, ln2) => {
    if (!ln1 && !ln2 && carry === 0) return null
    let v1 = ln1 ? ln1.val : 0
    let v2 = ln2 ? ln2.val : 0
    let sum = v1 + v2 + carry
    carry = 0
    if (sum > 9) {
      sum -= 10
      carry++
    }
    const node = new ListNode(sum)
    node.next = _addTwoNumbers(ln1 ? ln1.next : null, ln2 ? ln2.next : null)
    return node
  }
  return _addTwoNumbers(l1, l2)
}
