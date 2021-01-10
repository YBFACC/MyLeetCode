/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 自己--后序遍历--LCA解法
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, nodes) {
	const set = new Set()
	for (const node of nodes) {
		set.add(node.val)
	}
	let res = null
	const dfs = function (node) {
		if (!node) return []
		const floor = []
		const left = dfs(node.left)
		const right = dfs(node.right)
		if (set.has(node.val)) {
			floor.push(node.val)
		}
		floor.push(...left)
		floor.push(...right)
		if (floor.length === set.size && !res) {
			res = node
		}
		return floor
	}
	dfs(root)

	return res
}

//这解法真的妙
var lowestCommonAncestor = function(root, nodes) {
  if(!root || nodes.includes(root)) return root

  let left = lowestCommonAncestor(root.left,nodes)
  let right = lowestCommonAncestor(root.right,nodes)

  if(left && right) return root
  return  left || right 
};

// 作者：es-7
// 链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/solution/zui-jin-zai-kan-da-qin-fu-by-es-7-nif5/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。