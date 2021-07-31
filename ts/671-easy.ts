import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//参考--深搜
//要思考如何利用：root.val = min(root.left.val, root.right.val)

function findSecondMinimumValue(root: TreeNode): number {
  let res = -1
  const rootValue = root.val

  const dfs = function (node: TreeNode | null) {
    if (!node) return
    if (res !== -1 && node.val >= res) return

    if (node.val > rootValue) {
      res = node.val
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)

  return res
};