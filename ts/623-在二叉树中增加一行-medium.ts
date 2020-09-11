/*
 * @lc app=leetcode.cn id=623 lang=typescript
 *
 * [623] 在二叉树中增加一行
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//自己--DFS--返回节点
function addOneRow(root: TreeNode | null, v: number, d: number): TreeNode | null {
  if (!root) return null
  const dfs = function (node: TreeNode | null, depth: number, exchange: boolean): TreeNode | null {
    if (depth === d) {
      const newNode = new TreeNode(v)
      if (exchange) {
        newNode.left = dfs(node, depth + 1, true)
      } else {
        newNode.right = dfs(node, depth + 1, false)
      }
      return newNode
    }
    if (!node) return null
    node.left = dfs(node.left, depth + 1, true)
    node.right = dfs(node.right, depth + 1, false)
    return node
  }

  return dfs(root, 1, true)
};
// @lc code=end

let a = addOneRow(TreeNode.create([1, 2, 3, 4]), 5, 4)
console.log()