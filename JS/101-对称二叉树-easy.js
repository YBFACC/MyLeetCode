/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * 参考---递归---性能好
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(root===null) return true
  const recursion = function(root1, root2) {
    if (root1 === null && root2 === null) return true
    if (root1 === null || root2 === null) return false
    return (
      root1.val === root2.val &&
      recursion(root1.left, root2.right) &&
      recursion(root1.right, root2.left)
    )
  }
  return recursion(root.left, root.right)
}

// @lc code=end
