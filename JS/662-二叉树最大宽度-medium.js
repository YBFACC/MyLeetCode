/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
 */

// @lc code=start
/**
 * bfs超时
 * @param {TreeNode} root
 * @return {number}
 */
// var widthOfBinaryTree = function (root) {
//   if (!root) return 0
//   let dfs = [root]
//   let res = 1
//   while (dfs.length > 0) {
//     let size = dfs.length
//     while (size > 0) {
//       size--
//       let curr = dfs.shift()
//       if (!curr) {
//         dfs.push(null)
//         dfs.push(null)
//         continue
//       }
//       dfs.push(curr.left)
//       dfs.push(curr.right)
//     }
//     while (dfs.length > 0 && !dfs[0]) {
//       dfs.shift()
//     }
//     while (dfs.length > 0 && !dfs[dfs.length - 1]) {
//       dfs.pop()
//     }
//     res = Math.max(res, dfs.length)
//   }
//   return res
// }
// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * 自己--利用完全二叉树的性质
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  if (!root) return 0
  let count = 1
  let res = []
  const func = function (root, index, num) {
    if (root === null) return
    if (typeof res[index] === 'undefined') {
      res.push([num])
    } else {
      res[index].push(num)
    }

    func(root.left, index + 1, num * 2 + 1)
    func(root.right, index + 1, num * 2 + 2)
  }
  func(root, 0, 0)

  for (let i = 1; i < res.length; i++) {
    let item = res[i]
    if (item.length > 1) {
      count = Math.max(count, item[item.length - 1] - item[0] + 1)
    }
  }

  return count
}

let a1 = new TreeNode(1)

let a2 = new TreeNode(3)
let a3 = new TreeNode(33)
let a7 = new TreeNode(333)

let a4 = new TreeNode(2)
let a5 = new TreeNode(22)
// let a6 = new TreeNode(222)
a1.left = a2
a2.left = a3
a3.left = a7

a1.right = a4
a4.right = a5
// a5.right = a6

widthOfBinaryTree(a1)
