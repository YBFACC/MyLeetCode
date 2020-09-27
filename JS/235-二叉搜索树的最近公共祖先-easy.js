/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * 重做--分析二叉搜索树的情况
 *
 * 看题解后：注意这是二叉搜索树有以下特点🚀🚀🚀🚀
 * 节点左子树上的所有节点的值都小于等于节点的值
 * 节点右子树上的所有节点的值都大于等于节点的值
 * 左子树和右子树也都是BST
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(root.left, p, q)
	}
	if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(root.right, p, q)
	}
	return root
}
// @lc code=end
