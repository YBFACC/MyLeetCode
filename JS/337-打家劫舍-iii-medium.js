/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * 参考--后序遍历+dp--性能一般
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  const func = function(node) {
    if (!node) {
      return [0, 0]
    }
    let left = func(node.left)
    let right = func(node.right)

    let chooes = node.val + left[1] + right[1]
    let nochooes = Math.max(left[0], left[1]) + Math.max(right[0], right[1])

    return [chooes, nochooes]
  }

  let res = func(root)
  return Math.max(res[0], res[1])
}
// @lc code=end

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var rob = function(root) {
//   function dfs(cur) {
//     if (!cur) {
//       return [0, 0]
//     }
//     let L = dfs(cur.left)
//     let R = dfs(cur.right)
//     return [_.max(L) + _.max(R), cur.val + L[0] + R[0]]
//   }
//   return _.max(dfs(root))
// }
