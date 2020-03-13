/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * 自己--bst中序遍历为递增数组--性能差
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root === null) return true
  let res = []
  const func = function(node) {
    if (node === null) return null
    func(node.left)
    res.push(node.val)
    func(node.right)
  }
  func(root)

  for (let i = 1; i < res.length; i++) {
    if (res[i] <= res[i - 1]) {
      return false
    }
  }
  return true
}
// @lc code=end
