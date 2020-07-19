/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 */
const { TreeNode } = require('../LeetCode-Class/index')

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 参考--序列化+map计数
 * 这里前序比中序好
 * 有重复数字会影响系列化的唯一性
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  if (!root) return []
  let res = []
  let map = new Map()
  const dfs = function (node) {
    if (!node) return '#'
    let str = dfs(node.left) + ',' + node.val + ',' + dfs(node.right)
    if (map.has(str)) {
      map.set(str, map.get(str) + 1)
      if (map.get(str) === 2) res.push(node)
    } else {
      map.set(str, 1)
    }
    return str
  }
  dfs(root)
  return res
}
// @lc code=end

console.log(
  findDuplicateSubtrees(
    TreeNode.create([0, 0, 0, 0, null, null, 0, null, null, null, 0])
  )
)
