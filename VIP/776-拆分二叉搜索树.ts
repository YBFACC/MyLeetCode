/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode, ListNode, runScript } from 'leetcode-class';

//参考--抽象的递归

function splitBST(root: TreeNode | null, V: number): Array<TreeNode | null> {
  if (!root) return [null, null]
  let node_list
  if (root.val <= V) {
    node_list = splitBST(root.right, V)
    root.right = node_list[0]
    node_list[0] = root
  } else {
    node_list = splitBST(root.left, V)
    root.left = node_list[1]
    node_list[1] = root
  }
  return node_list
};

console.log(splitBST(TreeNode.create(
  [10, 5, 20, 3, 9, 15, 25, null, null, 8, null, null, null, null, null, 6, null, null, 7]
), 6))
console.log()