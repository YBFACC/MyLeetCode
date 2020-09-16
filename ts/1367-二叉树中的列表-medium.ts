/*
 * @lc app=leetcode.cn id=1367 lang=typescript
 *
 * [1367] 二叉树中的列表
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//参考--head需要与treenode的每个进行比较
function isSubPath(head: ListNode | null, root: TreeNode | null | undefined): boolean {
  if (!head || !root) return false
  return dfs(root, head) || isSubPath(head, root?.left) || isSubPath(head, root?.right)
};

function dfs(node: TreeNode | null, linked: ListNode | null): boolean {
  if (!linked) return true
  if (!node) return false
  return node.val === linked.val && (dfs(node.left, linked.next) || dfs(node.right, linked.next))
}
// @lc code=end

console.log(isSubPath(ListNode.create([4, 2, 8]), TreeNode.create([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3])))