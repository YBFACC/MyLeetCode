/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * 参考--差速遍历树--性能一般
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const func = function(nodeS, nodeT) {
  if (!nodeS && !nodeT) return true
  if (!nodeS || !nodeT) return false
  if (nodeS.val !== nodeT.val) return false
  return func(nodeS.left, nodeT.left) && func(nodeS.right, nodeT.right)
}
var isSubtree = function(s, t) {
  if (!s) return false
  if (func(s, t)) return true
  return isSubtree(s.left, t) || isSubtree(s.right, t)
}
// @lc code=end
