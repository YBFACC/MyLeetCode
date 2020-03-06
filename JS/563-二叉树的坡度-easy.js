/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
 * 参考--感觉描述不清性能一般
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  let sum=0
  const func=function(node){
    if(!node)return 0
    let left=func(node.left)
    let right=func(node.right)
    sum+=Math.abs(left-right)
    return left+right+node.val
  }
  func(root)
  return sum
};

// @lc code=end
