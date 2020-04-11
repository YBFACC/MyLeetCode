/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 自己--中序后序+递归--性能一般
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null
  const func = function (ino) {
    if (ino.length === 0) return null
    let root = new TreeNode(postorder.pop())
    let index = ino.indexOf(root.val)
    root.right = func(ino.slice(index + 1))
    root.left = func(ino.slice(0, index))
    return root
  }
  return func(inorder)
}
// @lc code=end
