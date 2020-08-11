class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

//自己--练习ts
function isPalindrome(head: ListNode | null): Boolean {
  if (!head) return true
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let pre: ListNode | null = null
  while (slow) {
    let next: ListNode | null = slow.next
    slow.next = pre
    pre = slow
    slow = next
  }
  while (pre) {
    if (pre?.val !== head?.val) return false
    head = head?.next
    pre = pre.next
  }
  return true
}

let a1: ListNode = new ListNode(1)

console.log(isPalindrome(a1))
