/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * 参考--前-中序-递归解--性能好
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const func = function(inorder) {
    if (!inorder || inorder.length === 0) return null
    let top = preorder.shift(),
      p = inorder.indexOf(top)
    let root = new TreeNode(top)

    root.left = func(inorder.slice(0, p))
    root.right = func(inorder.slice(p + 1))
    return root
  }
  return func(inorder)
}
// @lc code=end
