/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * 自己--102题数组反转--性能一般
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = []
  const func = function(root, index, res) {
    if (root === null) return
    if (typeof res[index] === 'undefined') {
      res.push([root.val])
    } else {
      res[index].push(root.val)
    }

    func(root.left, index + 1, res)
    func(root.right, index + 1, res)
  }
  func(root, 0, res)
  return res.reverse()
};
// @lc code=end

