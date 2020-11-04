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

//自己--后序--局部到全局
//向上传递boolean值，表示是否符合条件

function countUnivalSubtrees(root: TreeNode | null): number {
  let count = 0
  const dfs = function (node: TreeNode | null): boolean {
    if (!node) return true
    let left = dfs(node.left)
    let right = dfs(node.right)
    let floor = left && right && true
    if (node.left && node.left.val !== node.val) {
      floor = false
    }
    if (node.right && node.right.val !== node.val) {
      floor = false
    }
    if (floor) count++
    return floor
  }
  dfs(root)

  return count
};