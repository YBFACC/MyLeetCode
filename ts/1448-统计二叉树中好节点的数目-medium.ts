/*
 * @lc app=leetcode.cn id=1448 lang=typescript
 *
 * [1448] 统计二叉树中好节点的数目
 */
//自己--DFS+先序
import { TreeNode } from "leetcode-class";
// @lc code=start

function goodNodes(root: TreeNode | null): number {
  if (!root) return 0
  let res = 0
  const dfs = function (node: TreeNode | null, laster: number): void {
    if (!node) return
    if (node.val >= laster) {
      res++
    }
    const temp = Math.max(node.val, laster)
    dfs(node.left, temp)
    dfs(node.right, temp)
  }
  dfs(root, -Infinity)
  return res
};
// @lc code=end


goodNodes(TreeNode.create([3, 3, null, 4, 2]))