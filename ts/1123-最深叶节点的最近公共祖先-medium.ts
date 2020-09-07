/*
 * @lc app=leetcode.cn id=1123 lang=typescript
 *
 * [1123] 最深叶节点的最近公共祖先
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//参考--更加简洁的代码--可能会多访问节点的次数
function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  let leftDepth = depth(root.left)
  let rightDepth = depth(root.right)
  if (leftDepth === rightDepth) return root

  return leftDepth > rightDepth ? lcaDeepestLeaves(root.left) : lcaDeepestLeaves(root.right)

};

function depth(node: TreeNode | null): number {
  if (!node) return 0
  else {
    return Math.max(depth(node.left), depth(node.right)) + 1
  }
}
// @lc code=end

console.log(lcaDeepestLeaves(TreeNode.create([1, 2, 3])))