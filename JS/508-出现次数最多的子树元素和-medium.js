/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
 */

// @lc code=start

/**
 * 自己--二叉树递归求和
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  if (!root) return []
  let map = new Map()
  const LRD = function (node) {
    if (!node) return 0
    let right = LRD(node.right)
    let left = LRD(node.left)
    let sum = node.val + right + left
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
    return sum
  }
  LRD(root)
  let res = []
  let max = Number.MIN_SAFE_INTEGER
  map.forEach((v, k) => {
    if (v > max) {
      res.length = 0
      max = v
      res.push(k)
    } else if (v === max) {
      res.push(k)
    }
  })
  return res
}
// @lc code=end

let a1 = new TreeNode(5)
let a2 = new TreeNode(2)
let a3 = new TreeNode(-3)

a1.left = a2
a1.right = a3
findFrequentTreeSum(a1)

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
