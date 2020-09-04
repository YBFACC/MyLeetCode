/*
 * @lc app=leetcode.cn id=1305 lang=typescript
 *
 * [1305] 两棵二叉搜索树中的所有元素
 */

// @lc code=start
//自己--暴力+排序
function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const res: number[] = []
  const dfs = function (node: TreeNode | null) {
    if (!node) return
    node.left && dfs(node.left)
    res.push(node.val)
    node.right && dfs(node.right)
  }
  dfs(root1)
  dfs(root2)
  res.sort((a, b) => a - b)
  return res
}

// @lc code=end

