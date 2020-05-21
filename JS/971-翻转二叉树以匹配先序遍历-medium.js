/*
 * @lc app=leetcode.cn id=971 lang=javascript
 *
 * [971] 翻转二叉树以匹配先序遍历
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
 * 参考--抽象
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function (root, voyage) {
  if (root.val !== voyage[0]) return [-1]
  let res = []
  let index = 0
  const dfs = function (node) {
    if (node.val === voyage[index]) {
      index++
      if (node.left && node.left.val === voyage[index]) {
        dfs(node.left)
      }
      if (node.right && node.right.val === voyage[index]) {
        dfs(node.right)
        if (node.left && node.left.val === voyage[index]) {
          res.push(node.val)
          dfs(node.left)
        }
      }
    }
  }
  dfs(root)

  if (index !== voyage.length) {
    return [-1]
  }

  return res
}
// @lc code=end
