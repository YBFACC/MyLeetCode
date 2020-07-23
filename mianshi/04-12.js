/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode } = require('../LeetCode-Class/index')

/**
 * 自己--重做--map+前缀和
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (!root) return 0
  let res = 0
  let map = new Map()
  map.set(0, 0)
  const dfs = function (node, index) {
    if (!node) return
    let _sum = map.get(index - 1) + node.val

    for (const [k, v] of map) {
      if (_sum - v === sum) res++
    }

    map.set(index, map.get(index - 1) + node.val)
    dfs(node.left, index + 1)
    dfs(node.right, index + 1)
    map.delete(index)
  }
  dfs(root, 1)
  return res
}

pathSum(TreeNode.create([-2, null, -3]), -3)
