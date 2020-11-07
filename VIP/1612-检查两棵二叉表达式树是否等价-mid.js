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

//自己--都是加法不管先后顺序--直接比较所有变量是否相同

var checkEquivalence = function (root1, root2) {
	const list1 = []
	const list2 = []
	const dfs = function (node, temp) {
		if (!node) return
		if (node.val !== '+') {
			temp.push(node.val)
		}
		dfs(node.left,temp)
		dfs(node.right,temp)
	}
	dfs(root1, list1)
	dfs(root2, list2)
	list1.sort()
	list2.sort()
	return list1.join('') === list2.join('')
}

checkEquivalence(
	TreeNode.create(['+', 'a', '+', null, null, 'b', 'c']),
	TreeNode.create(['+', '+', 'b', 'c', 'a'])
)
