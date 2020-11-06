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

//自己--递归--层层解开括号

function str2tree(s: string): TreeNode | null {
  if (s.length === 0) return null
  const root_index = get_num(s)
  const root = new TreeNode(+s.slice(0, root_index))
  if (s.length === 1) return root
  s = s.slice(root_index)
  const Len = s.length
  const index = split(s)
  const left = s.slice(1, index)
  const right = s.slice(index + 2, Len - 1)

  root.left = str2tree(left)
  root.right = str2tree(right)

  return root
};

//分割root的值，处理负数
function get_num(str: string): number {
  const Len = str.length
  for (let i = 1; i < Len; i++) {
    if (str[i] === '(' || str[i] === ')') {
      return i
    }
  }
  return Len
}
//分割左右子树
function split(str: string): number {
  let sum = 1
  const Len = str.length
  for (let i = 1; i < Len; i++) {
    if (str[i] === '(') {
      sum++
    }
    else if (str[i] === ')') {
      sum--
    }
    if (sum <= 0) {
      return i
    }
  }
  return Len
}

console.log(str2tree('-4(-2(3)(1))'))

console.log()