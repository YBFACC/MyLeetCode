/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * 自己---回溯--性能差🥶
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) return []
  let res = []
  const func = function(root, arr) {
    arr.push(root.val)
    if (!root.left && !root.right) {
      console.log(arr)
      res.push(arr.join('->'))
    }
    if (root.left) {
      func(root.left, arr)
      arr.pop()
    }
    if (root.right) {
      func(root.right, arr)
      arr.pop()
    }
  }
  func(root, [])
  return res
}
// @lc code=end
