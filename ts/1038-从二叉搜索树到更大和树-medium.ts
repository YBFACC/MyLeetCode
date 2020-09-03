/*
 * @lc app=leetcode.cn id=1038 lang=typescript
 *
 * [1038] 从二叉搜索树到更大和树
 */

// @lc code=start
//参考-同538--后中左
function bstToGst(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  let sum = 0
  const dfs = function (node: TreeNode | null) {
    if (!node) return
    dfs(node.right)
    sum += node.val
    node.val = sum
    dfs(node.left)
  }
  dfs(root)
  return root
};
// @lc code=end

