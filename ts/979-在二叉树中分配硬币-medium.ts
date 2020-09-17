/*
 * @lc app=leetcode.cn id=979 lang=typescript
 *
 * [979] 在二叉树中分配硬币
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//参考--过载--想不到
function distributeCoins(root: TreeNode | null): number {
  if (!root) return 0
  let sum = 0
  const dfs = function (node: TreeNode | null): number {
    if (!node) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)
    sum += Math.abs(left) + Math.abs(right)
    return node.val + left + right - 1

  }
  dfs(root)
  return sum
};
// @lc code=end

