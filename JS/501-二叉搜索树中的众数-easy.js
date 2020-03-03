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

  let list = [...map]
  list.sort((a, b) => b[1] - a[1])
  let res = []
  for (let i = 0; i < list.length; i++) {
    if (i === 0 || list[i][1] === list[i - 1][1]) {
      res.push(list[i][0])
    } else {
      break
    }
  }
  return res
}
// @lc code=end
