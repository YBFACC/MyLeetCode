/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * 自己--遍历树--性能一般
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (!root.left && !root.right) return false
  let list = []
  const func = function(node) {
    if (!node) return
    list.push(node.val)
    node.left && func(node.left)
    node.right && func(node.right)
  }
  func(root)
  console.log(list)

  for (let i = 0; i < list.length; i++) {
    let temp = k - list[i]
    if (list.includes(temp) && i !== list.lastIndexOf(temp)) return true
  }
  return false
}
// @lc code=end
