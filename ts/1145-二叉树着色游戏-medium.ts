/*
 * @lc app=leetcode.cn id=1145 lang=typescript
 *
 * [1145] 二叉树着色游戏
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//参考--父节点-左/右子树-有一方绝对大于
function btreeGameWinningMove(root: TreeNode | null, n: number, x: number): boolean {
  if (!root) return false
  let target: any = null
  const dfs = function (node: TreeNode | null) {
    if (!node) return
    if (x === node.val) {
      target = node
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)

  const get_child = function (node: TreeNode | null): number {
    if (!node) return 0
    let left = get_child(node.left)
    let right = get_child(node.right)
    return left + right + 1
  }

  let left_num = get_child(target.left)
  let rihgt_num = get_child(target.right)
  let parent_num = n - left_num - rihgt_num - 1
  if (left_num + rihgt_num < parent_num || left_num > rihgt_num + parent_num || left_num + parent_num < rihgt_num) return true
  return false
};

console.log(btreeGameWinningMove(TreeNode.create([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 11, 3))
// @lc code=end

