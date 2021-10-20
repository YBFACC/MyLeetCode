/*
 * @Author: yubingfeng
 * @Date: 2021-10-20 15:11:39
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-10-20 16:13:04
 * @Description: 自己--中序遍历
 */

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';
function kthSmallest(root: TreeNode | null, k: number): number {
  let res = -1
  let count = 0
  const dfs = function (node: TreeNode | null) {
    if (!node || res !== -1) return
    dfs(node.left)
    count++
    if (k === count) res = node.val
    dfs(node.right)
  }
  dfs(root)
  return res
};