/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * 自己--easy
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  if (!root) return -1
  const min = root.val
  let res = Infinity
  const dfs = function (node) {
    if (!node) return
    if (node.val > min) {
      res = Math.min(res, node.val)
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)

  return res !== Infinity ? res : -1
}
// @lc code=end
