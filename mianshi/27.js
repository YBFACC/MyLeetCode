/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 自己--递归--秒杀
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  const func = function(node) {
    if (!node) return null
    let curr = new TreeNode(node.val)
    curr.left = func(node.right)
    curr.right = func(node.left)
    return curr
  }
  return func(root)
}
