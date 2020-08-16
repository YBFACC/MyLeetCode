class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
//自己-重做--easy
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true
  let res = true
  const dfs = function (node: TreeNode | null): number {
    if (!node) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)
    if (Math.abs(left - right) > 1) res = false

    return Math.max(left, right) + 1
  }
  dfs(root)
  return res
}
