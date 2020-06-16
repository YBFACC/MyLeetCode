/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start

/**
 * Encodes a tree to a single string.
 * 参考--前序遍历
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root === null) return 'x,'
  let left = serialize(root.left)
  let right = serialize(root.right)
  return root.val + ',' + left + right
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function bulidTree(list) {
  let value = list.shift()
  if (value === 'x') return null

  let root = new TreeNode(value)
  root.left = bulidTree(list)
  root.right = bulidTree(list)
  return root
}
var deserialize = function (data) {
  let list = data.split(',')
  return bulidTree(list)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)
let a4 = new TreeNode(4)
let a5 = new TreeNode(5)
let a6 = new TreeNode(6)
a1.left = a2
a1.right = a3
a2.left = a4
a2.right = a5
a3.right = a6

let temp = serialize(a1)

return
