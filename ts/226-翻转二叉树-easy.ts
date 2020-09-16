/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//自己--重做--easy
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const left = invertTree(root.right)
  const right = invertTree(root.left)
  root.left = left
  root.right = right
  return root
};
// @lc code=end

console.log(invertTree(TreeNode.create([4, 2, 7, 1, 3, 6, 9])))

console.log()