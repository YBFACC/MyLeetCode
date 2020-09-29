/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * 自己--Morris遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (head) {
	if (!head) {
		return []
	}
	const res = []
	let curr1 = head
	let curr2 = null
	while (curr1) {
		if (curr1.left) {
			curr2 = curr1.left
			while (curr2.right && curr2.right !== curr1) {
				curr2 = curr2.right
			}
			if (!curr2.right) {
				curr2.right = curr1
				curr1 = curr1.left
				continue
			} else {
				curr2.right = null
				printEdge(curr1.left, res)
			}
		}
		curr1 = curr1.right
	}
	printEdge(head, res)
	return res
}

var printEdge = function (head, res) {
	let tail = reverseEdge(head)
	let curr = tail
	while (curr) {
		res.push(curr.val)
		curr = curr.right
	}
	reverseEdge(tail)
}

var reverseEdge = function (head) {
	let pre = null
	let next = null
	while (head) {
		next = head.right
		head.right = pre
		pre = head
		head = next
	}
	return pre
}
// @lc code=end
