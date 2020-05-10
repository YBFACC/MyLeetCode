/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
 */

// @lc code=start
/**
 * 自己--辅助栈
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  if (!root) return null
  let res = []
  const func = function (node) {
    if (!node) return null
    func(node.left)
    res.push(node)
    func(node.right)
  }
  func(root)

  for (let i = 0; i < res.length; i++) {
    res[i].right = res[i + 1]
    res[i].left = null
  }
  res[res.length - 1].right = null
  res[res.length - 1].left = null

  return res[0]
}
// @lc code=end

/**
 * 参考--亚节点
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const dummy = new TreeNode(null)
  let cur = dummy

  const func = function (node) {
    if (!node) return null
    func(node.left)
    node.left = null
    cur.right = node
    cur = cur.right
    func(node.right)
  }
  func(root)
  return dummy.right
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
let a1 = new TreeNode(1)
let a2 = new TreeNode(3)
let a3 = new TreeNode(2)
let a4 = new TreeNode(5)
let a5 = new TreeNode(3)
let a6 = new TreeNode(9)
a1.left = a2
a1.right = a3
a2.left = a4
a2.right = a5
a3.right = a6

increasingBST(a1)
