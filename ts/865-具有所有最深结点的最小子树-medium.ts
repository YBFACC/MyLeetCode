/*
 * @lc app=leetcode.cn id=865 lang=typescript
 *
 * [865] 具有所有最深结点的最小子树
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//自己--老树形dp了
function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const dfs = function (node: TreeNode | null): any {
    if (!node) return [0, null]
    let left = dfs(node.left)
    let right = dfs(node.right)
    if (left[0] === right[0]) {
      return [left[0] + 1, node]
    }
    else if (left[0] < right[0]) {
      right[0]++
      return right
    }
    else if (left[0] > right[0]) {
      left[0]++
      return left
    }
  }
  return dfs(root)[1]
};
// @lc code=end

subtreeWithAllDeepest(TreeNode.create([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]))
