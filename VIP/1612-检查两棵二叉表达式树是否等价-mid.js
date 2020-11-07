/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean}
 */
const { TreeNode } = require('leetcode-class')

//参考--处理+、-，统计每个字母的数量

var checkEquivalence = function (root1, root2) {
	return dfs(root1).join('') === dfs(root2).join('')
}
function dfs(node) {
	const list = new Int32Array(26)
	if (!node) return list
	if (node.val === '+' || node.val === '-') {
		let left = dfs(node.left)
		let right = dfs(node.right)
		merge(left, right, list, node.val)
	} else {
		list[node.val.charCodeAt(0) - 97]++
	}
	return list
}
function merge(L, R, all, op) {
	for (let i = 0; i < 26; i++) {
		if (op === '+') all[i] = L[i] + R[i]
		else all[i] = L[i] - R[i]
	}
}

checkEquivalence(
	TreeNode.create(['+', 'a', '+', null, null, 'b', 'c']),
	TreeNode.create(['+', '+', 'b', 'c', 'a'])
)
