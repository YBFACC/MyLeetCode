/*
 * @lc app=leetcode.cn id=987 lang=javascript
 *
 * [987] 二叉树的垂序遍历
 */

// @lc code=start

/**
 * 自己--按题目意思-x，y轴排序
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  if (!root) return []
  let res = []
  let map = new Map()
  let max = 0
  let min = 0
  const func = function (node, x, y) {
    if (!node) return
    let temp = map.has(x) ? map.get(x) : []
    temp.push({ val: node.val, y: y })
    map.set(x, temp)
    max = Math.max(max, x)
    min = Math.min(min, x)
    func(node.left, x - 1, y - 1)
    func(node.right, x + 1, y - 1)
  }
  func(root, 0, 0)

  for (let i = min; i <= max; i++) {
    let list = map.get(i)
    list.sort((a, b) => {
      if (a.y !== b.y) {
        return b.y - a.y
      } else {
        return a.val - b.val
      }
    })
    let temp = []
    list.forEach(v => temp.push(v.val))
    res.push(temp)
  }
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
let a4 = new TreeNode(4)
let a5 = new TreeNode(50)
let a6 = new TreeNode(6)
let a7 = new TreeNode(7)

a1.left = a2
a1.right = a3
a2.left = a4
a2.right = a5
a3.left = a6
a3.right = a7
// verticalTraversal(a1)
