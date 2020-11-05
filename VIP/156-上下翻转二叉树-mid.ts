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

//提示--返回最左节点

function upsideDownBinaryTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  if (!root.left && !root.right) return root
  let res: TreeNode | null = null
  const dfs = function (node: TreeNode | null) {
    if (!node || !node.left) return node
    let left = dfs(node.left) as TreeNode
    let right = dfs(node.right)
    if (!res) res = left
    left.left = right
    left.right = node
    node.left = null
    node.right = null
    return left.right
  }
  dfs(root)

  return res
};
upsideDownBinaryTree(TreeNode.create([1, 2, 3, 4, 5]))

//copy
//https://leetcode-cn.com/problems/binary-tree-upside-down/comments/
// class Solution {
//   public TreeNode upsideDownBinaryTree(TreeNode root) {
//       if (root == null || root.left == null) {
//           return root;
//       }
//       TreeNode LE = root.left, RI = root.right;
//       TreeNode res = upsideDownBinaryTree(root.left);
//       root.left = null;
//       root.right = null;
//       LE.right = root;
//       LE.left = RI;
//       return res;
//   }
// }
