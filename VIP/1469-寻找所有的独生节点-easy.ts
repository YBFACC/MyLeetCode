import { TreeNode, ListNode, } from 'lc-tool';

//自己--先序

function getLonelyNodes(root: TreeNode | null): number[] {
  const res: number[] = []
  const dfs = function (node: TreeNode | null, father: number) {
    if (!node) return
    if (father < 2) {
      res.push(node.val)
    }
    let floor = 0
    if (node.left) {
      floor++
    }
    if (node.right) {
      floor++
    }
    dfs(node.left, floor)
    dfs(node.right, floor)
  }
  dfs(root, 2)
  return res
};