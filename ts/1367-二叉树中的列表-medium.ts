/*
 * @lc app=leetcode.cn id=1367 lang=typescript
 *
 * [1367] 二叉树中的列表
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//自己--错误--head需要与treenode的每个进行比较
function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  let res = false
  if (!head) return false
  const dfs = function (node: TreeNode | null, linked: ListNode | null): void {
    if (!linked) {
      res = true
      return
    }
    if (!node) return
    if (node.val === head.val) {
      dfs(node.left, head.next)
      dfs(node.right, head.next)
    }
    if (node.val === linked.val) {
      dfs(node.left, linked.next)
      dfs(node.right, linked.next)
    } else {
      dfs(node.left, head)
      dfs(node.right, head)
    }
  }
  dfs(root, head)
  return res
};
// @lc code=end

