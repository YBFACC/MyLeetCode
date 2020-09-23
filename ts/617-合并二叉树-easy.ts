/*
 * @lc app=leetcode.cn id=617 lang=typescript
 *
 * [617] 合并二叉树
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//自己--重做--递归合并
function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
  if (!t1) return t2
  if (!t2) return t1
  const dfs = function (node1: TreeNode | null, node2: TreeNode | null): TreeNode | null {
    if (!node1 && !node2) return null
    let floor = 0
    node1 && (floor += node1.val)
    node2 && (floor += node2.val)
    const root = new TreeNode(floor)
    root.left = dfs(node1 ? node1.left : null, node2 ? node2.left : null)
    root.right = dfs(node1 ? node1.right : null, node2 ? node2.right : null)
    return root
  }
  return dfs(t1, t2)
};
// @lc code=end

mergeTrees(TreeNode.create([1, 3, 2, 5])
  , TreeNode.create([2, 1, 3, null, 4, null, 7]))