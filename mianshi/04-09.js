/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode } = require('..//LeetCode-Class/index')

/**
 * 参考--回溯
 * 必须出现父节点，子节点才能出现
 * queue存储父节点已经出现的子节点
 * @param {TreeNode} root
 * @return {number[][]}
 */
var BSTSequences = function (root) {
  if (!root) return [[]]
  const res = []
  const dfs = function (node, queue, list) {
    if (!node) return
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
    if (queue.length === 0) {
      res.push(list.slice())
      return
    }
    let size = queue.length
    while (size > 0) {
      let curr = queue.shift()

      dfs(curr, queue.slice(), [...list, curr.val])
      queue.push(curr)
      size--
    }
  }
  dfs(root, [], [root.val])

  return res
}

// BSTSequences(TreeNode.create([2, 1, 3]))
BSTSequences(TreeNode.create([30, 12, 50, 10, 28, 44, 88]))
