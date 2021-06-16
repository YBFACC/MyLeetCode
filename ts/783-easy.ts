/*
 * @lc app=leetcode.cn id=783 lang=typescript
 *
 * [783] 二叉搜索树节点最小距离
 */

// @lc code=start

//自己--中序遍历

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
function minDiffInBST(root: TreeNode | null): number {
  let min = Infinity
  let curr = Infinity
  const dfs = function (node: TreeNode | null) {
    if (!node) return
    dfs(node.left)
    if (curr === Infinity) {
      curr = node.val
    } else {
      min = Math.min(min, Math.abs(curr - node.val))
      curr = node.val
    }
    dfs(node.right)
  }
  dfs(root)
  return min
};
// @lc code=end

