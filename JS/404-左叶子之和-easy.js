/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 自己--dfs深度优先遍历--性能一般
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let count = 0
  const func = function(root) {
    if (!root) return
    const Left = root.left
    if (Left !== null) {
      if (!Left.left && !Left.right) count += Left.val
    }
    func(root.left)
    func(root.right)
  }
  func(root)
  return count
}
// @lc code=end
