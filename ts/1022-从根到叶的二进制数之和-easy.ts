/*
 * @lc app=leetcode.cn id=1022 lang=typescript
 *
 * [1022] 从根到叶的二进制数之和
 */

// @lc code=start
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
import { TreeNode } from 'lc-tool';

//自己--深搜模版--先序

function sumRootToLeaf(root: TreeNode | null): number {

  let res = 0
  const dfs = function (node: TreeNode | null, list: number[]) {
    if (!node) return
    list.push(node.val)
    if (!node.left && !node.right) {
      const str = list.join('')
      res += parseInt(str, 2)
      list.pop()
      return
    }
    dfs(node.left, list)
    dfs(node.right, list)
    list.pop()
  }
  dfs(root, [])

  return res
};
// @lc code=end

