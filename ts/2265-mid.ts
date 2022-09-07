import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

/**
 * 自己－－后序
 */
function averageOfSubtree(root: TreeNode | null): number {
  let res = 0

  //[sum,count] 子树和　子树节点
  const dfs = function (node: TreeNode | null): number[] {
    if (!node) return [0, 0]
    const left = dfs(node.left)
    const right = dfs(node.right)

    const sum = left[0] + right[0] + node.val
    const count = left[1] + right[1] + 1
    const avg = Math.trunc(sum / count)
    if (avg === node.val) res++

    return [sum, count]
  }
  dfs(root)

  return res
};