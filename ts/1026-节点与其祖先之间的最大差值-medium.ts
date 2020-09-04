/*
 * @lc app=leetcode.cn id=1026 lang=typescript
 *
 * [1026] 节点与其祖先之间的最大差值
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//参考--树形dp--[min,max]
function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) return 0
  let res = -Infinity
  const dfs = function (node: TreeNode | null): number[] {
    if (!node) return [100000, -1]

    let left = dfs(node.left)
    let right = dfs(node.right)
    let min = Math.min(left[0], right[0])
    let max = Math.max(left[1], right[1])
    if (max !== -1) {
      res = Math.max(res, node.val - min)
    }
    if (min !== 100001) {
      res = Math.max(res, max - node.val)
    }
    return [Math.min(node.val, min), Math.max(node.val, max)]
  }
  dfs(root)
  return res
};
// @lc code=end

maxAncestorDiff(TreeNode.create([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]))
