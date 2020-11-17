/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const { TreeNode, ListNode, runScript } = require('leetcode-class')

//自己--树形dp--最近公共祖先问题

var lowestCommonAncestor = function (root, p, q) {
	if (!root || !p || !q) return null
	const dfs = function (node) {
		const floor = [false, false, null]
		if (!node) return floor
		let left = dfs(node.left)
		let right = dfs(node.right)

		if (left[2]) return left
		if (right[2]) return right

		floor[0] = left[0] || right[0] || node.val === p.val || false
		floor[1] = left[1] || right[1] || node.val === q.val || false

		if (floor[0] && floor[1]) floor[2] = node

		return floor
	}
	return dfs(root)[2]
}

console.log(
	lowestCommonAncestor(
		TreeNode.create([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
		TreeNode.create([5]),
		TreeNode.create([10])
	)
)
