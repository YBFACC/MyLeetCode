/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * 自己--递归--性能一般
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(node) {
  if (!node) return ''
  let left = node.left ? '(' + tree2str(node.left) + ')' : ''
  let right = node.right ? '(' + tree2str(node.right) + ')' : ''
  if (left === '' && right !== '') {
    return node.val + '(' + ')' + right
  } else {
    return node.val + left + right
  }
}
// @lc code=end
