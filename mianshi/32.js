/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 自己--bfs
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if (root === null) return []
  let list = [root]
  let res = []
  while (list.length) {
    let temp = []
    for (const node of list) {
      res.push(node.val)
      node.left && temp.push(node.left)
      node.right && temp.push(node.right)
    }
    list = temp
  }
  return res
}
