import { ListNode, TreeNode } from 'leetcode-class'

//自己--BFS链表操作
function listOfDepth(tree: TreeNode | null): Array<ListNode | null> {
  if (!tree) return []
  const bfs = [tree]
  const res = []
  while (bfs.length > 0) {
    const tump = new ListNode(undefined)
    let tail = tump
    let size = bfs.length
    while (size > 0) {
      let curr = bfs.shift() as TreeNode
      tail.next = new ListNode(curr.val)
      tail = tail.next
      curr.left && bfs.push(curr.left)
      curr.right && bfs.push(curr.right)
      size--
    }
    res.push(tump.next)
  }
  return res
}
