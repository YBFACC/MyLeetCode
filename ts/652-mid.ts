import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

/**
 * 自己－－后序遍历，序列化树
 */
function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  if (!root) return [];
  const map = new Map<string, number>(), res: TreeNode[] = []

  const dfs = function (node: TreeNode | null): string {
    if (!node) return '#'
    const left = dfs(node.left)
    const right = dfs(node.right)
    const temp = left + "," + right + "," + node.val
    if (map.get(temp) === 1) res.push(node)
    map.set(temp, map.has(temp) ? map.get(temp) as number + 1 : 1)
    return temp
  }
  dfs(root)

  return res
};

findDuplicateSubtrees(TreeNode.create([2, 2, 2, 3, null, 3, null]))