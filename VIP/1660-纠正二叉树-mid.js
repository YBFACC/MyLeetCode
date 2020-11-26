/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const {
	AVLTree,
	Heap,
	TreeNode,
	ListNode,
	RunScript,
	Node,
	SegmentTree
} = require('lc-tool')


//自己--层序遍历模版

/**
 * @param {TreeNode} root
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
var correctBinaryTree = function (root) {
	const res = root
	let bfs = [root]
	let finished = false
	while (bfs.length > 0 && !finished) {
		let size = bfs.length
		const map = new Map()
		while (size > 0) {
			let curr = bfs.shift()
			if (curr.left) {
				bfs.push(curr.left)
				map.set(curr.left.val, { parent: curr, dic: 'left' })
			}
			if (curr.right) {
				bfs.push(curr.right)
				map.set(curr.right.val, { parent: curr, dic: 'right' })
			}
			size--
		}
		for (const item of bfs) {
			if (item.right && map.has(item.right.val)) {
				const { parent, dic } = map.get(item.val)
				parent[dic] = null
				finished = true
			}
		}
	}
	return res
}

let tree = TreeNode.create([1, 2, 3])
tree.left.right = tree.right

correctBinaryTree(tree)
