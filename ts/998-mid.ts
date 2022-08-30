import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

/**
 * 提示－－只遍历右侧节点
 * 将下层组件放在左节点
 */

function insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return root
  const target = new TreeNode(val)

  const dfs = function (node: TreeNode | null): TreeNode | null {
    if (!node) return target

    if (node.val < val) {
      target.left = node
      return target
    } else {
      node.right = dfs(node.right)
    }
    return node
  }
  const res = dfs(root)
  return res
};

insertIntoMaxTree(TreeNode.create([4, 1, 3, null, null, 2]), 5)
insertIntoMaxTree(TreeNode.create([5, 2, 3, null, 1]), 4)
insertIntoMaxTree(TreeNode.create([5, 2, 4, null, 1]), 3)
