/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
	const res = []
	const dfs = function (node) {
		if (!node) return
		for (let i = 0; i < node.children.length; i++) {
			dfs(node.children[i])
		}
		res.push(node.val)
	}
	dfs(root)
	return res
}
// @lc code=end
