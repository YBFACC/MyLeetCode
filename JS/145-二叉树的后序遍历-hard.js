/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * 自己--递归--迭代难
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return []
  let res = []
  const func = function (node) {
    if (!node) return null
    func(node.left)
    func(node.right)
    res.push(node.val)
  }
  func(root)
  return res
}
// @lc code=end

// 参考--后序遍历--迭代-左右根
var postorderTraversal = root => {
  if (!root) return []
  let res = []
  let stack = [root]
  while (stack.length > 0) {
    let curr = stack.pop()
    res.unshift(curr.val)
    curr.left && stack.push(curr.left)
    curr.right && stack.push(curr.right)
  }
  return res
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

let a1 = new TreeNode(3)
let a2 = new TreeNode(1)
let a3 = new TreeNode(2)

let a4 = new TreeNode(4)
let a5 = new TreeNode(5)
let a6 = new TreeNode(6)
a1.left = a2
a1.right = a3
// a2.left = a4
// a2.right = a5
// a3.right = a6

postorderTraversal(a1)
