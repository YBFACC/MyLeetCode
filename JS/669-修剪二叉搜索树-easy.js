/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * copy--递归-优雅--性能差
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

var trimBST = function(root, L, R) {
  if (root === null) return null

  if (root.val < L) return trimBST(root.right, L, R)
  if (root.val > R) return trimBST(root.left, L, R)

  root.left = trimBST(root.left, L, R)
  root.right = trimBST(root.right, L, R)
  return root
}

// @lc code=end

/**
 * 自己--循环--性能好
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  while (root) {
    if (root.val < L) {
      root = root.right
    } else if (root.val > R) {
      root = root.left
    } else {
      break
    }
  }
  let node1 = root
  let node2 = root
  while (node1 && node1.left) {
    let left = node1.left
    if (left.val < L) {
      node1.left = left.right
    } else {
      node1 = node1.left
    }
  }
  while (node2 && node2.right) {
    let right = node2.right
    if (right.val > R) {
      node2.right = right.left
    } else {
      node2 = node2.right
    }
  }
  return root
}
