/*
 * @Author: yubingfeng
 * @Date: 2021-11-26 08:51:37
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-11-26 09:01:39
 * @Description: 自己--BST--深搜
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let res = null

  const dfs = function (node: TreeNode | null) {
    if (!node || res) return
    if (node.val === val) {
      res = node
      return
    }
    if (node.val > val) {
      dfs(node.left)
    } else {
      dfs(node.right)
    }
  }
  dfs(root)

  return res
};