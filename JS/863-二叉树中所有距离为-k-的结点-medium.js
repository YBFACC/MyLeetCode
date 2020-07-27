/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
 */
const { TreeNode } = require('../LeetCode-Class/index')

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 参考--DFS
 * 分成2部分处理
 * 1.对目标节点以下对节点=>简单的DFS就可以（类似根节点距离为k的子节点）
 * 2.对目标节点的路径上的父节点=>走路径以外的子节点，数组的长度代表父节点到目标节点的长度
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
  let res = []
  let parents = []
  let find = false
  function dfs(node, path) {
    if (!node || find) return
    if (node.val === target.val) {
      find = true
      parents = path.slice()
      _dfs(node, 0)
    } else {
      path.push(node)
    }
    dfs(node.left, path)
    dfs(node.right, path)
    path.pop()
  }
  dfs(root, [])
  function _dfs(node, index) {
    if (!node) return
    if (index === K) {
      res.push(node.val)
    }
    _dfs(node.left, index + 1)
    _dfs(node.right, index + 1)
  }

  while (parents.length > 0) {
    let curr = parents.shift()
    let _index = parents.length + 1
    if (_index === K) {
      res.push(curr.val)
    }
    const temp = parents.length > 0 ? parents[0] : target

    curr.left && curr.left.val === temp.val && _dfs(curr.right, _index + 1)
    curr.right && curr.right.val === temp.val && _dfs(curr.left, _index + 1)
  }

  return res
}
// @lc code=end

distanceK(TreeNode.create([0, 1, null, 3, 2]), TreeNode.create([2]), 1)
