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

//自己--模拟题目实现--每次删除叶子节点

function findLeaves(root: TreeNode | null): number[][] {

  const res: number[][] = []

  while (root && (root.left || root.right)) {
    const temp: number[] = []
    dfs(root, temp)
    res.push(temp)
  }
  root && res.push([root.val])
  return res
};
const dfs = function (node: TreeNode | null, temp: number[]): TreeNode | null {
  if (!node) return null
  if (!node.left && !node.right) {
    temp.push(node.val)
    return null
  }
  node.left = dfs(node.left, temp)
  node.right = dfs(node.right, temp)
  return node
}

findLeaves(TreeNode.create([1, 2, 3, 4, 5]))