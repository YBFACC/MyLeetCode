/*
 * @lc app=leetcode.cn id=998 lang=typescript
 *
 * [998] 最大二叉树 II
 */

// @lc code=start
//参考--注意题意--将新值放在A数组的末尾
function insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val)

  if (root.val > val) {
    root.right = insertIntoMaxTree(root.right, val)
    return root
  } else {
    const temp = new TreeNode(val)
    temp.left = root
    return temp
  }
};
// @lc code=end

