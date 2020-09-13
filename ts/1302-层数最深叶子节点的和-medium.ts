import { DH_CHECK_P_NOT_PRIME } from "constants";
/*
 * @lc app=leetcode.cn id=1302 lang=typescript
 *
 * [1302] 层数最深叶子节点的和
 */
import { TreeNode } from "leetcode-class";

// @lc code=start
//自己--DFS-easy
function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0
  const dfs = function (node: TreeNode | null, depth: number): number[] {
    if (!node) return [-1, NaN]
    if (!node.left && !node.right) {
      return [depth, node.val]
    }
    let left = dfs(node.left, depth + 1)
    let right = dfs(node.right, depth + 1)
    if (left[0] === right[0]) {
      return [left[0], left[1] + right[1]]
    }
    if (left[0] > right[0]) {
      return left
    } else {
      return right
    }
  }
  return dfs(root, 0)[1]
};
// @lc code=end

console.log(deepestLeavesSum(TreeNode.create([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8])))