import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--重做--递归

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) return 0
  let count = 0
  if (root.val >= low && root.val <= high) count += root.val
  count += rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
  return count
};