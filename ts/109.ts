import { ListNode, TreeNode } from 'leetcode-class'

//参考--链表--中序-转化为平衡BST
function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) return null
  let Len = 0
  let h: ListNode | null = head
  while (head) {
    head = head.next
    Len++
  }

  const dfs = function (start: number, end: number): TreeNode | null {
    if (start > end) return null
    const mid = (start + end) >>> 1
    const left = dfs(start, mid - 1)

    const root = new TreeNode(h?.val)

    h = (h as ListNode).next
    root.left = left

    root.right = dfs(mid + 1, end)
    return root
  }
  return dfs(0, Len - 1)
}

console.log(sortedListToBST(ListNode.create([-10, -3, 0, 5, 9])))
