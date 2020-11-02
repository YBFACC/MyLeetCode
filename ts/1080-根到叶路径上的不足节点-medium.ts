/*
 * @lc app=leetcode.cn id=1080 lang=typescript
 *
 * [1080] 根到叶路径上的不足节点
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//自己--后序遍历
//父节点也可能被删--该节点上的路径没有符合条件的
function sufficientSubset(root: TreeNode | null,
  limit: number): TreeNode | null {
  if (!root) return null
  const dfs =
    function (node: TreeNode | null, sum: number): boolean {
      if (!node) return false
      if (!node.right && !node.left) {
        return sum + node.val >= limit
      }
      let left = dfs(node.left, sum + node.val)
      let right = dfs(node.right, sum + node.val)
      if (!left) {
        node.left = null
      }
      if (!right) {
        node.right = null
      }
      return left || right
    }
  dfs(root, 0)

  return (!root?.left && !root?.right) ? null : root
};
// @lc code=end

console.log(sufficientSubset(TreeNode.create([5, -6, -6]), 0))
console.log(sufficientSubset(TreeNode.create([1, 2, -3, -5, null, 4, null]
), -1))


console.log(sufficientSubset(TreeNode.create([1, 2, 3, 4, -99, -99, 7, 8, 9, -99, -99, 12, 13, -99, 14]), 1))
