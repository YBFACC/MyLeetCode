/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * 参考--精简
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const dfs = function (node) {
    if (!node) return ''
    if (!node.left && !node.right) {
      return node.val + '#'
    }
    return dfs(node.left) + dfs(node.right)
  }
  return dfs(root1) === dfs(root2)
}
// @lc code=end
