import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--中序遍历

function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return root
  let tump = new TreeNode(-1)
  let temp = tump
  const dfs = function (node: TreeNode | null) {
    if (!node) return null
    dfs(node.left)
    temp.right = node
    node.left = null
    temp = temp.right
    dfs(node.right)
  }
  dfs(root)

  return tump.right
};

increasingBST(TreeNode.create([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]))