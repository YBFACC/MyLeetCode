import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--树--后序

function diameter(root: Node): number {
  let res = 0
  const dfs = function (node: Node | null) {
    if (!node) return 0

    let first = 0
    let sec = 0
    for (const child of node.children) {
      const depth = dfs(child)
      if (depth > first) {
        sec = first
        first = depth
      } else if (depth > sec) {
        sec = depth
      }
    }
    res = Math.max(res, first + sec)
    return first + 1 
  }
  dfs(root)

  return res
};