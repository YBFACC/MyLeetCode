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

//参考官方题解--递减、递增就是-1、+1
//返回[递增，递减]

function longestConsecutive(root: TreeNode | null): number {
  let count = 0
  //[递增，递减]
  const dfs = function (node: TreeNode | null): number[] {
    if (!node) return [0, 0]
    let inr = 1, dor = 1

    if (node.left) {
      let left_list = dfs(node.left)
      if (node.val === node.left.val + 1) {
        dor = left_list[1] + 1
      } else if (node.val === node.left.val - 1) {
        inr = left_list[0] + 1
      }
    }

    if (node.right) {
      let right_list = dfs(node.right)
      if (node.val === node.right.val + 1) {
        dor = Math.max(dor, right_list[1] + 1)
      } else if (node.val === node.right.val - 1) {
        inr = Math.max(inr, right_list[0] + 1)
      }
    }

    count = Math.max(count, dor + inr - 1)

    return [inr, dor]
  }
  dfs(root)
  return count
};