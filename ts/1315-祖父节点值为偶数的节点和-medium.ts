/*
 * @lc app=leetcode.cn id=1315 lang=typescript
 *
 * [1315] 祖父节点值为偶数的节点和
 */
import { TreeNode, ListNode, runScript } from "leetcode-class";
// @lc code=start
//自己--DFS--easy
function sumEvenGrandparent(root: TreeNode | null): number {
  if (!root) return 0
  let res = 0
  const dfs = function (node: TreeNode | null, grand_fath: boolean, fath: boolean): void {
    if (!node) return
    if (grand_fath) {
      res += node.val
    }
    if (node.val % 2 === 0) {
      node.left && dfs(node.left, fath, true)
      node.right && dfs(node.right, fath, true)
    } else {
      node.left && dfs(node.left, fath, false)
      node.right && dfs(node.right, fath, false)
    }
  }
  dfs(root, false, false)
  return res
};
// @lc code=end

console.log(sumEvenGrandparent(TreeNode.create([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5])))
