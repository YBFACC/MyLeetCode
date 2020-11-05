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

//自己--后序遍历BST
//左边所有节点<node.val
//右边所有节点>node.val

function largestBSTSubtree(root: TreeNode | null): number {
  let res = 0
  //[val,min,max]
  const dfs = function (node: TreeNode | null): number[] {
    if (!node) return [0, Infinity, -Infinity]
    let [left_val, left_min, left_max] = dfs(node.left)
    let [right_val, right_min, right_max] = dfs(node.right)
    if (left_val === -1 || right_val === -1) {
      return [-1, Infinity, -Infinity]
    }
    if (node.left && node.val <= node.left.val) {
      return [-1, Infinity, -Infinity]
    }
    if (node.right && node.val >= node.right.val) {
      return [-1, Infinity, -Infinity]
    }
    if (left_max >= node.val) {
      return [-1, Infinity, -Infinity]
    }
    if (right_min <= node.val) {
      return [-1, Infinity, -Infinity]
    }
    let floor = left_val + right_val + 1
    let floor_min = Math.min(left_min, node.val)
    let floor_max = Math.max(right_max, node.val)
    res = Math.max(res, floor)
    return [floor, floor_min, floor_max]
  }
  dfs(root)
  return res
};