const {
	AVLTree,
	Heap,
	TreeNode,
	ListNode,
	RunScript,
	Node,
	SegmentTree
} = require('lc-tool')


//自己--先序遍历

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	const list = []
	const dfs = function (node) {
		if (!node) {
			list.push('#')
			return
		}
		list.push(node.val)
		dfs(node.left)
		dfs(node.right)
	}
	dfs(root)
	return list.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	const list = data.split(',')
	const dfs = function () {
		const floor = list.shift()
		if (floor === '#') {
			return null
		}
		const node = new TreeNode(floor)
		node.left = dfs()
		node.right = dfs()
		return node
	}
	return dfs()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
