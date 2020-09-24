/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 */
const { TreeNode } = require('leetcode-class')
// @lc code=start
/**
 * 参考--改为morris--统计最大出现字母
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
	let count = 0,
		maxcount = 0,
		currValue = Infinity
	const res = []
	let curr = root
	while (curr) {
		let preLeft = curr.left
		if (preLeft) {
			while (preLeft.right && preLeft.right !== curr) {
				preLeft = preLeft.right
			}
			if (!preLeft.right) {
				preLeft.right = curr
				curr = curr.left
			} else {
				upade(curr.val)
				curr = curr.right
				preLeft = null
			}
		} else {
			upade(curr.val)
			curr = curr.right
			preLeft = null
		}
	}

	function upade(nodeVal) {
		if (nodeVal === currValue) {
			count++
		} else {
			count = 1
			currValue = nodeVal
		}
		if (count === maxcount) {
			res.push(nodeVal)
		}
		if (count > maxcount) {
			res.length = 0
			res.push(nodeVal)
			maxcount = count
		}
	}
	return res
}
// @lc code=end

findMode(TreeNode.create([5, 3, 6, 2, 4, null, null, 1]))
