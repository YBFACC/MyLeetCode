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

//自己--后序遍历--树形dp
//题意--父节点比子节点小1

function longestConsecutive(root: TreeNode | null): number {
  if (!root) return 0
  let max = -Infinity

  //[叶子值，长度]
  const dfs = function (node: TreeNode | null): number[] {
    if (!node) return [-Infinity, 0]
    let left = dfs(node.left)
    let right = dfs(node.right)
    let floor = 1
    if (node.val + 1 === left[0]) {
      floor = Math.max(floor, left[1] + 1)
    }
    if (node.val + 1 === right[0]) {
      floor = Math.max(floor, right[1] + 1)
    }
    max = Math.max(max, floor)
    return [node.val, floor]
  }
  dfs(root)
  return max
};

longestConsecutive(TreeNode.create([1, null, 3, 2, 4, null, null, null, 5]))