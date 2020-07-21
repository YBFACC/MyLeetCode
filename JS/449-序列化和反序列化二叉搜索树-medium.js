/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
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
 * 参考--先序遍历
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '#'

  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const list = data.split(',')
  const dfs = function () {
    const val = list.shift()
    if (val === '#' || !val) return null
    const root = new TreeNode(parseInt(val, 10))
    root.left = dfs()
    root.right = dfs()
    return root
  }
  return dfs()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

console.log(
  serialize(
    TreeNode.create([
      41,
      37,
      44,
      24,
      39,
      42,
      48,
      1,
      35,
      38,
      40,
      null,
      43,
      46,
      49,
      0,
      2,
      30,
      36,
      null,
      null,
      null,
      null,
      null,
      null,
      45,
      47,
      null,
      null,
      null,
      null,
      null,
      4,
      29,
      32,
      null,
      null,
      null,
      null,
      null,
      null,
      3,
      9,
      26,
      null,
      31,
      34,
      null,
      null,
      7,
      11,
      25,
      27,
      null,
      null,
      33,
      null,
      6,
      8,
      10,
      16,
      null,
      null,
      null,
      28,
      null,
      null,
      5,
      null,
      null,
      null,
      null,
      null,
      15,
      19,
      null,
      null,
      null,
      null,
      12,
      null,
      18,
      20,
      null,
      13,
      17,
      null,
      null,
      22,
      null,
      14,
      null,
      null,
      21,
      23
    ])
  )
)

const temp = deserialize(
  '41,37,24,1,0,#,#,2,#,4,3,#,#,9,7,6,5,#,#,#,8,#,#,11,10,#,#,16,15,12,#,13,#,14,#,#,#,19,18,17,#,#,#,20,#,22,21,#,#,23,#,#,35,30,29,26,25,#,#,27,#,28,#,#,#,32,31,#,#,34,33,#,#,#,36,#,#,39,38,#,#,40,#,#,44,42,#,43,#,#,48,46,45,#,#,47,#,#,49,#,#'
)

console.log()
