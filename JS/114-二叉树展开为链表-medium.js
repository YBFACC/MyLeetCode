/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * 参考--后序-对每个节点都交换左右子树--性能好
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return
  flatten(root.right)
  flatten(root.left)
  let temp = root.right
  root.right = root.left
  root.left = null
  while (root.right) {
    root = root.right
  }
  root.right = temp
}
// @lc code=end

