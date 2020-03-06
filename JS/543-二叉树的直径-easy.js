/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * 参考--左右子树相加最大值--性能好
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let deep = 0
  const func = function(node) {
    if (!node) {
      return 0
    }
    let left = func(node.left)
    let right = func(node.right)

    deep = Math.max(left + right, deep)
    return Math.max(left, right) + 1
  }
  func(root)
  return deep
}
// @lc code=end
