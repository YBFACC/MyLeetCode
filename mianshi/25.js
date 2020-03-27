/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 自己--臭长--推荐递归解决
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null
  let curr
  if (l1 && l2) {
    if (l1.val <= l2.val) {
      curr = new ListNode(l1.val)
      l1 = l1.next
    } else {
      curr = new ListNode(l2.val)
      l2 = l2.next
    }
  } else if (l1) {
    curr = new ListNode(l1.val)
    l1 = l1.next
  } else {
    curr = new ListNode(l2.val)
    l2 = l2.next
  }

  let res = curr

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val <= l2.val) {
        curr.next = new ListNode(l1.val)
        l1 = l1.next
      } else {
        curr.next = new ListNode(l2.val)
        l2 = l2.next
      }
    } else if (l1) {
      curr.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      curr.next = new ListNode(l2.val)
      l2 = l2.next
    }
    curr = curr.next
  }

  return res
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
