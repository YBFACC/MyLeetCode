import { TreeNode, ListNode, runScript } from 'leetcode-class';

//自己--中序BST

function closestValue(root: TreeNode | null, target: number): number {

  let res = Infinity

  const dfs = function (node: TreeNode | null) {
    if (!node) return
    dfs(node.left)
    if (Math.abs(res - target)
      > Math.abs(node.val - target)) {
      res = node.val
    }
    dfs(node.right)
  }
  dfs(root)

  return res
};