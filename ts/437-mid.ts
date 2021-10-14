//自己--后序-回溯


import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

function pathSum(root: TreeNode | null, targetSum: number): number {
  let res = 0

  const dfs = function (node: TreeNode | null): number[] {
    if (!node) return []
    let left = dfs(node.left)
    let right = dfs(node.right)
    const floor = []
    left.forEach((v) => floor.push(v + node.val))
    right.forEach((v) => floor.push(v + node.val))
    floor.push(node.val)
    floor.forEach((v => {
      if (v === targetSum) res++
    }))
    return floor
  }
  dfs(root)
  return res
};