/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 参考--后序遍历返回子树深度--性能好
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let res = true
  const func = function (node) {
    if (!node) return 0
    let left = func(node.right)
    let right = func(node.left)
    if (res) {
      res = Math.abs(left - right) <= 1
    }
    return Math.max(left, right) + 1
  }
  func(root)
  return res
}
