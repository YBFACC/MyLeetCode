/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * 自己--两次遍历树--性能差
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let list = []
  const func = function(node) {
    if (!node) return
    list.push(node.val)
    node.left && func(node.left)
    node.right && func(node.right)
  }
  func(root)
  list.sort((a, b) => b - a)
  const add = function(node) {
    if (!node) return
    let sum = 0
    for (let i = 0; i < list.length; i++) {
      if (list[i] > node.val) {
        sum += list[i]
      } else {
        break
      }
    }
    node.val += sum
    node.left && add(node.left)
    node.right && add(node.right)
  }
  add(root)
  return root
}
// @lc code=end
