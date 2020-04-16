/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 参考了自己以前的代码113题--递归--双100
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if (!root) return []
  if (root.val === sum && !root.left && !root.right) return [[sum]]
  let res = []
  const func = function (root, sum, temp) {
    temp.push(root.val)
    sum -= root.val
    if (sum === 0 && !root.left && !root.right) {
      res.push(temp.slice())
      temp.pop()
      return
    }
    root.left && func(root.left, sum, temp)
    root.right && func(root.right, sum, temp)
    temp.pop()
    sum += root.val
  }
  func(root, sum, [])
  return res
}
