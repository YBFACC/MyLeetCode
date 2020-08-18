import { ListNode, TreeNode } from 'leetcode-class'

//参考--好理解的双指针法
function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) return null
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  let preslow = null
  while (fast && fast.next && slow && slow.next) {
    preslow = slow
    slow = slow.next
    fast = fast.next.next
  }
  const root = new TreeNode(slow?.val)

  if (preslow !== null) {
    preslow.next = null
    root.left = sortedListToBST(head)
  }

  root.right = sortedListToBST(slow?.next)
  return root
}
