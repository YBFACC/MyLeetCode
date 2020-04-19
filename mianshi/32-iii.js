/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 自己--bfs--性能一般
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let bfs = [root]
  let left_to_right = false
  let res = [[root.val]]
  while (bfs.length > 0) {
    let size = bfs.length
    let temp = []
    while (size > 0) {
      let curr = bfs.shift()
      curr.left && bfs.push(curr.left)
      curr.right && bfs.push(curr.right)

      left_to_right && curr.left && temp.push(curr.left.val)
      left_to_right && curr.right && temp.push(curr.right.val)

      !left_to_right && curr.left && temp.unshift(curr.left.val)
      !left_to_right && curr.right && temp.unshift(curr.right.val)
      size--
    }
    left_to_right = !left_to_right
    if (temp.length > 0) res.push(temp)
  }
  return res
}
