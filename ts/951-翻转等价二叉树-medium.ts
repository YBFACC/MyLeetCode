/*
 * @lc app=leetcode.cn id=951 lang=typescript
 *
 * [951] 翻转等价二叉树
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//参考--注意树上的节点不是全部翻转-是部分
function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 && !root2) return true
  if (!root1 || !root2) return false
  if (root1.val !== root2.val) return false
  return (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left)) || (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right))
};
// @lc code=end

