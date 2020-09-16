/*
 * @lc app=leetcode.cn id=1379 lang=javascript
 *
 * [1379] 找出克隆二叉树中的相同节点
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
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
//自己--这题莫名其妙🤯
var getTargetCopy = function (original, cloned, target) {
	let res = null
	const dfs = function (node) {
		if (!node) return
		if (node.val === target.val) {
			res = node
		}
		dfs(node.left)
		dfs(node.right)
	}
	dfs(cloned)
	return res
}
// @lc code=end
