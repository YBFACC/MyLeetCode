/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 */

// @lc code=start

/**
 * 自己--dfs--性能好
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if (!root) return 0
  let res = 0
  const dfs = function (node, str) {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      res += parseInt(str + node.val, 10)
    }
    dfs(node.left, str + node.val)
    dfs(node.right, str + node.val)
  }
  dfs(root, '')
  return res
}
// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)

a1.left = a2
a1.right = a3

sumNumbers(a1)
