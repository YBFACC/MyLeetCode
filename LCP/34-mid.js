const { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } = require("lc-tool");

/**
 * 参考－－后序＋动态规划
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var maxValue = function (root, k) {
  
	const dfs = function (node) {
		const dp = Array.from({ length: k + 1 }, () => 0);
		if (!node) return dp;
		const left = dfs(node.left);
		const right = dfs(node.right);
		dp[0] = Math.max(...left) + Math.max(...right);

		for (let i = 1; i <= k; i++) {
			for (let j = 0; j < i; j++) {
				dp[i] = Math.max(dp[i], left[j] + right[i - j - 1] + node.val);
			}
		}
		return dp;
	};
	return Math.max(...dfs(root));
};
