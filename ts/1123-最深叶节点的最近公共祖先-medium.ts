/*
 * @lc app=leetcode.cn id=1123 lang=typescript
 *
 * [1123] 最深叶节点的最近公共祖先
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//自己--DFS--后序一次完成最大深度和节点-拆除2次
function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  let res: TreeNode | null = null
  let max_deepth = 0
  const get_deepth = function (node: TreeNode | null, index: number): void {
    if (!node) { return }
    if (!node.left && !node.right) {
      max_deepth = Math.max(max_deepth, index)
      return
    }
    node.left && get_deepth(node.left, index + 1)
    node.right && get_deepth(node.right, index + 1)
  }

  const dfs = function (node: TreeNode | null, index: number): number {
    if (!node) { return index - 1 }
    if (!node.left && !node.right && index === max_deepth) {
      res = node
      return index
    }
    let left = dfs(node.left, index + 1)
    let right = dfs(node.right, index + 1)
    if (left === right && left === max_deepth) {
      res = node
    }
    return Math.max(left, right)
  }

  get_deepth(root, 0)
  dfs(root, 0)

  return res
};
// @lc code=end

lcaDeepestLeaves(TreeNode.create([1,2,3]))