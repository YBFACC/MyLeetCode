/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 自己--bfs--秒杀
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let res = []
  let node = [root]
  while (node.length > 0) {
    let size = node.length
    let temp = []
    while (size > 0) {
      let curr = node.shift()
      temp.push(curr.val)
      curr.left && node.push(curr.left)
      curr.right && node.push(curr.right)
      size--
    }
    res.push(temp)
  }
  return res
}
