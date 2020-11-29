import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//提示--中序遍历

function convertBiNode(root: TreeNode | null): TreeNode | null {
  const dump = new TreeNode()
  let temp = dump
  const dfs = function (node: TreeNode | null) {
    if (!node) return
    dfs(node.left)
    temp.right = node
    node.left = null
    temp = temp.right
    dfs(node.right)
  }
  dfs(root)
  return dump.right
};