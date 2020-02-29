/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * 中序遍历不能唯一确定一棵二叉搜索树。
 * 先序和后序遍历不能唯一确定一棵二叉搜索树。
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const func = function(left, right) {
    if (left > right) return null

    let index = Math.trunc((left + right) / 2)

    const root = new TreeNode(nums[index])
    root.left = func(left, index - 1)
    root.right = func(index + 1, right)
    return root
  }
  return func(0, nums.length - 1)
}
// @lc code=end
