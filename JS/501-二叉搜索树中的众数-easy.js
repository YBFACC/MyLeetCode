/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * 自己--map-递归--性能一般
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let map = new Map()
  const func = function(node) {
    if (!node) return
    map.set(node.val, map.has(node.val) ? map.get(node.val) + 1 : 1)
    node.left && func(node.left)
    node.right && func(node.right)
  }
  func(root)
  let max = Number.MIN_SAFE_INTEGER
  let res = []
  map.forEach(v => (v > max ? (max = v) : null))
  map.forEach((v, k) => {
    v === max ? res.push(k) : null
  })
  return res
}
// @lc code=end
