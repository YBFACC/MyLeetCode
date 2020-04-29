/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start

/**
 * 自己--bfs
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return []
  let bfs = [root]
  let res = []
  while (bfs.length > 0) {
    let size = bfs.length
    let max = Number.MIN_SAFE_INTEGER
    while (size > 0) {
      let curr = bfs.shift()
      curr.left && bfs.push(curr.left)
      curr.right && bfs.push(curr.right)
      max = Math.max(max, curr.val)
      size--
    }
    res.push(max)
  }
  return res
}
// @lc code=end

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
largestValues(a1)
