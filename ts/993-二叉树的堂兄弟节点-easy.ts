/*
 * @lc app=leetcode.cn id=993 lang=typescript
 *
 * [993] 二叉树的堂兄弟节点
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//自己--BFS在一层中找到堂兄弟节点
function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) return false
  let bfs: TreeNode[] = [root]
  while (bfs.length > 0) {
    let size = bfs.length
    while (size-- > 0) {
      let curr = bfs.shift() as TreeNode
      if (curr.left && curr.right && ((curr.left.val === x && curr.right.val === y) || (curr.left.val === y && curr.right.val === x))) {
        return false
      }
      curr.left && bfs.push(curr.left)
      curr.right && bfs.push(curr.right)
    }
    if (bfs.find((a) => a.val == y) && bfs.find((a) => a.val == x) != undefined) {
      return true
    }
  }
  return false
};
// @lc code=end

console.log(isCousins(TreeNode.create([1, 2, 3, 4]), 4, 3))