/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start

/**
 * 自己--后序遍历-数型dp
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = root.val
  const dfs = function (node) {
    if (!node) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)
    let curr = Math.max(left + node.val, right + node.val)
    max = Math.max(max, curr, left + right + node.val)
    return curr < 0 ? 0 : curr
  }
  dfs(root)
  return max
}
// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

let a1 = new TreeNode(6)
let a2 = new TreeNode(9)
let a3 = new TreeNode(-3)
let a4 = new TreeNode(-6)
let a5 = new TreeNode(2)
let a6 = new TreeNode(2)

a1.left = a2
a1.right = a3
a3.left = a4
a3.right = a5
a5.left = a6
maxPathSum(a1)
