/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 参考--递归--性能一般
 * 注意对当前节点的k--
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res
  const func = function (root) {
    if (!root) return
    if (k === 0) return

    func(root.right)

    k--
    if (k === 0) {
      res = root.val
      return
    }

    func(root.left)
  }
  func(root)
  return res
}
