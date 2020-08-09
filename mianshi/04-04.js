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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let res = true
  const dfs = function (node) {
    if (!node) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)
    if (Math.abs(left - right) > 1) {
      res = false
    }
    return Math.max(left, right) + 1
  }
  dfs(root)
  return res
}
