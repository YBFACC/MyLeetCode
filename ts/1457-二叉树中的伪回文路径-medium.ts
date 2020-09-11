/*
 * @lc app=leetcode.cn id=1457 lang=typescript
 *
 * [1457] 二叉树中的伪回文路径
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//自己--回溯--奇数个数小于2
function pseudoPalindromicPaths(root: TreeNode | null): number {
  if (!root) return 0
  const temp = Array.from({ length: 10 }, () => 0)
  let res = 0
  const dfs = function (node: TreeNode | null, temp: number[]): void {
    if (!node) return
    temp[node.val]++
    if (!node.left && !node.right) {
      let count = 0
      temp.forEach(val => count += val % 2 === 0 ? 0 : 1)
      if (count <= 1) res++
    }
    dfs(node.left, temp.slice())
    dfs(node.right, temp.slice())
  }
  dfs(root, temp)

  return res
};
// @lc code=end

pseudoPalindromicPaths(TreeNode.create([9]))