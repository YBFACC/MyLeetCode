/*
 * @lc app=leetcode.cn id=894 lang=typescript
 *
 * [894] 所有可能的满二叉树
 */

// @lc code=start
//参考评论--递归返回子序列
//难点：回溯没法处理树-序列化处理不看好
function allPossibleFBT(N: number): Array<TreeNode | null> {
  const list_node = []
  if (N === 1) {
    return [new TreeNode(0)]
  }
  for (let i = 1; i < N; i += 2) {
    const left = allPossibleFBT(i)
    const right = allPossibleFBT(N - i - 1)
    for (const l of left) {
      for (const r of right) {
        const root = new TreeNode(0)
        root.left = l
        root.right = r
        list_node.push(root)
      }
    }
  }
  return list_node
};
// @lc code=end

