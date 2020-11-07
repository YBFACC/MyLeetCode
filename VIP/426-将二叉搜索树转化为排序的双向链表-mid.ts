import { TreeNode, ListNode, runScript } from 'leetcode-class';

//自己--中序BST--使用数组储存-简单

function treeToDoublyList(root: Node | null): Node | null {
  if (!root) return null
  if (!root.left && !root.right) {
    root.left = root
    root.right = root
    return root
  }
  const list: Node[] = []

  const dfs = function (node: Node | null) {
    if (!node) return
    dfs(node.left)
    list.push(node)
    dfs(node.right)
  }
  dfs(root)
  const Len = list.length
  list[0].left = list[Len - 1]
  list[0].right = list[1]
  list[Len - 1].left = list[Len - 2]
  list[Len - 1].right = list[0]
  for (let i = 1; i < Len - 1; i++) {
    list[i].left = list[i - 1]
    list[i].right = list[i + 1]
  }
  return list[0]
};