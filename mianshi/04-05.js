/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode } = require('../LeetCode-Class/index')

/**
 * 自己--利用BST中序为升序数组
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true
  let isBST = true
  let last = -Infinity
  function _isValidBST(node) {
    if (!node) return
    _isValidBST(node.left)
    if (node.val > last) {
      last = node.val
    } else {
      isBST = false
    }
    _isValidBST(node.right)
  }
  _isValidBST(root)
  return isBST
}

isValidBST(TreeNode.create([5, 1, 4, null, null, 3, 6]))
