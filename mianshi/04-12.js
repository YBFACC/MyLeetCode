/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode } = require('../LeetCode-Class/index')

/**
 * 自己--重做--前序+list
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (!root) return 0
  let res = 0
  let list = []
  let target = 0
  const dfs = function (node) {
    if (!node) return
    list.push(node.val)
    target += node.val

    let temp = target
    let index = 0
    while (index < list.length) {
      if (temp === sum) res++
      temp -= list[index]
      index++
    }

    dfs(node.left)
    dfs(node.right)
    list.pop()
    target -= node.val
  }
  dfs(root)
  return res
}

pathSum(TreeNode.create([-2, null, -3]), -3)
