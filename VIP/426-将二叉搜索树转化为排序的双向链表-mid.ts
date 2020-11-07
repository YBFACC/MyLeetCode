import { TreeNode, ListNode, runScript } from 'leetcode-class';

//参考--双指针
//head--指向头节点
//pre--表示上一个节点
function treeToDoublyList(root: Node | null): Node | null {
  if (!root) return null
  let head!: Node
  let pre!: Node

  const dfs = function (node: Node | null): void {
    if (!node) return
    dfs(node.left)
    if (pre) {
      node.left = pre
      pre.right = node
    } else {
      head = node
    }
    pre = node
    dfs(node.right)
  }
  dfs(root)

  head.left = pre
  pre.right = head

  return head
};

treeToDoublyList(Node.create([-1, null, 1, null, 9]))