/*
 * @lc app=leetcode.cn id=1325 lang=typescript
 *
 * [1325] 删除给定值的叶子节点
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//自己--DFS--easy水题
function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
  if (!root) return null
  const dfs = function (node: TreeNode | null) {
    if (!node) return null
    node.left = dfs(node.left)
    node.right = dfs(node.right)
    if (!node.left && !node.right) {
      return target === node.val ? null : node
    }
    return node
  }
  return dfs(root)
};
// @lc code=end

let a = removeLeafNodes(TreeNode.create([1, 2, 3, 2, null, 2, 4]), 2)

console.log([1, 2, 3, 2, null, 2, 4])