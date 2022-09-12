import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

/**
 * 自己－－后序
 * 利用二叉搜索树特性返回子树
 * @param root 
 * @param low 
 * @param high 
 * @returns 
 */
function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (!root) return null;

  const dfs = function (node: TreeNode | null): TreeNode | null {
    if (!node) return null;
    node.left = dfs(node.left)
    node.right = dfs(node.right)

    if (node.val < low) return node.right;
    if (node.val > high) return node.left;
    return node
  }
  return dfs(root)
};

const temp = trimBST(TreeNode.create([3, 0, 4, null, 2, null, null, 1]), 1, 3)

console.log()