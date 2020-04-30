/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 先序遍历构造二叉树
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
 * 自己--递归-先序生成二叉搜索树--性能一般
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  if (preorder.length === 0) return null
  let root = new TreeNode(preorder.shift())
  let index = preorder.findIndex(value => value > root.val)
  index = index === -1 ? preorder.length : index//如果没有大于root的值，则右子树为空
  root.left = bstFromPreorder(preorder.slice(0, index))
  root.right = bstFromPreorder(preorder.slice(index))
  return root
}
// @lc code=end
