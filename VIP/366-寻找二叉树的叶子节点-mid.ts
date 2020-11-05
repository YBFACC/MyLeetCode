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

//参考--后序遍历--反向定义深度

function findLeaves(root: TreeNode | null): number[][] {
  const res: number[][] = []

  const dfs = function (node: TreeNode | null): number {
    if (!node) return -1

    let left = dfs(node.left)
    let right = dfs(node.right)
    const index = Math.max(left, right) + 1
    if (!res[index]) {
      res[index] = []
    }
    res[index].push(node.val)
    return index
  }
  dfs(root)

  return res
};


findLeaves(TreeNode.create([1, 2, 3, 4, 5]))