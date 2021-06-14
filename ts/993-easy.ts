/*
 * @lc app=leetcode.cn id=993 lang=typescript
 *
 * [993] 二叉树的堂兄弟节点
 */

//提示--Bfs

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start
//自己--BFS在一层中找到堂兄弟节点
function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  let temp = [root]
  while (temp.length > 0) {
    const list = []
    let _x = false
    let _y = false
    while (temp.length > 0) {
      const floor = temp.shift() as TreeNode
      //处理是否同一个父节点
      if (floor.left && floor.right &&
        ((floor.left.val === x && floor.right.val === y) ||
          (floor.left.val === y && floor.right.val === x))) return false

      if (floor.left) {
        list.push(floor.left)
        if (floor.left.val === x) _x = true
        if (floor.left.val === y) _y = true
      }
      if (floor.right) {
        list.push(floor.right)
        if (floor.right.val === x) _x = true
        if (floor.right.val === y) _y = true
      }

    }
    if (_x && _y) return true
    temp = list
  }
  return false
};
// @lc code=end

console.log(isCousins(
  TreeNode.create([1, 2, 3, null, null, null, 4, null, 5])
  , 3
  , 2))

console.log(isCousins(TreeNode.create([1, 2, 3, 4]), 4, 3))