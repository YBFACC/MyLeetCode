/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * 自己--是dfs--性能一般
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  const func = function (root, index, res) {
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
  return res
}
// @lc code=end

/**
 * 自己--打卡BFS
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let dfs = [root]
  let res = [[root.val]]
  while (dfs.length > 0) {
    let size = dfs.length
    let temp = []
    while (size > 0) {
      let curr = dfs.shift()
      curr.left && dfs.push(curr.left)
      curr.right && dfs.push(curr.right)
      curr.left && temp.push(curr.left.val)
      curr.right && temp.push(curr.right.val)
      size--
    }
    temp.length > 0 && res.push(temp.slice())
  }
  return res
}

