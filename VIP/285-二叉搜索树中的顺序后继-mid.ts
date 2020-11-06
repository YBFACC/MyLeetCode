import { TreeNode, ListNode, runScript } from 'leetcode-class';

//自己--中序遍历BST

function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  if (!p) return null
  let res: TreeNode | null = null

  const dfs = function (node: TreeNode | null) {
    if (!node) return
    dfs(node.left)
    if (node.val > p.val) {
      if (!res || node.val < res.val) {
        res = node
      }
    }
    dfs(node.right)
  }
  dfs(root)
  return res
};