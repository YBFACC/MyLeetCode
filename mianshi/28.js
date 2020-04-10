/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 参考--bfs不可以做-递归--性能好
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true
  function _isSymmetric(node1, node2) {
    if (!node1 && !node2) return true
    if (!node1 || !node2) return false
    return (
      node1.val === node2.val &&
      _isSymmetric(node1.left, node2.right) &&
      _isSymmetric(node1.right, node2.left)
    )
  }
  return _isSymmetric(root.left, root.right)
}
