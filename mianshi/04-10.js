/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode } = require('../LeetCode-Class/index')

/**
 * 自己--重做
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function (t1, t2) {
  if (!t1 && !t2) return true
  if (!t1 || !t2) return false

  return (
    checkSubTree(t1.left, t2) ||
    checkSubTree(t1.right, t2) ||
    (t1.val === t2.val &&
      checkSubTree(t1.left, t2.left) &&
      checkSubTree(t1.right, t2.right))
  )
}

console.log(
  checkSubTree(TreeNode.create([1, null, 2, 4]), TreeNode.create([3, 2]))
)
