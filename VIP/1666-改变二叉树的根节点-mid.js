//参考--细节怪--树的变换节点

/**
 * @param {Node} node
 * @return {Node}
 */
var flipBinaryTree = function (root, leaf) {
	const nodes = []
	let curr = leaf
	while (curr) {
		nodes.push(curr)
		curr = curr.parent
	}
	for (let i = nodes.length - 1; i >= 0; i--) {
		curr = nodes[i]
		let orgin_left = curr.left
		curr.left = curr.parent
		if (i >= 1 && curr.right == nodes[i - 1]) {
      curr.right = orgin_left
      //root时，不需要变换
			if (i === nodes.length - 1) {
				;[curr.left, curr.right] = [curr.right, curr.left]
			}
		}
		curr.parent = i >= 1 ? nodes[i - 1] : null
	}

	return leaf
}
