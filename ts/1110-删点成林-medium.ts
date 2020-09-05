/*
 * @lc app=leetcode.cn id=1110 lang=typescript
 *
 * [1110] 删点成林
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//自己--简单的递归-set删除
function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  const res: Array<TreeNode | null> = [root]
  const set_delete = new Set(to_delete)

  const dfs = function (node: TreeNode | null): TreeNode | null {
    if (!node) return null
    if (set_delete.has(node.val)) {
      res.push(node.left)
      res.push(node.right)
      dfs(node.left)
      dfs(node.right)
      return null
    } else {
      node.left = dfs(node.left)
      node.right = dfs(node.right)
    }

    return node
  }
  dfs(root)

  const temp = []
  for (const item of res) {
    if (!item) continue
    if (!set_delete.has(item.val)) {
      temp.push(item)
    }
  }
  return temp
};
// @lc code=end

delNodes(TreeNode.create([1, 2, 3, 4, 5, 6, 7]), [3, 5])
