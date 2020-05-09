/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * 自己--中序BST=>升序序列
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  if (!root) return 0
  let res = 0
  const func = function (node) {
    if (!node) return
    func(node.left)
    if (node.val >= L && node.val <= R) {
      res += node.val
    }
    func(node.right)
  }
  func(root)
  return res
}
// @lc code=end
