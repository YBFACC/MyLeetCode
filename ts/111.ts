import { TreeNode } from 'leetcode-class'
//自己--重做
function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  let res = Number.MAX_SAFE_INTEGER
  const dfs = function (node: TreeNode, deepth: number): void {
    if (!root) return
    if (!node.left && !node.right) {
      res = Math.min(res, deepth)
      return
    }
    node.left && dfs(node.left, deepth + 1)
    node.right && dfs(node.right, deepth + 1)
    return
  }
  dfs(root, 1)
  return res
}

console.log(minDepth(TreeNode.create([1, 2])))
