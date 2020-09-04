/*
 * @lc app=leetcode.cn id=1305 lang=typescript
 *
 * [1305] 两棵二叉搜索树中的所有元素
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//参考--使用generator函数实现同时递归--核心-中序+归并
function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const res: number[] = []
  let iterator1 = dfs(root1)
  let iterator2 = dfs(root2)
  let next1 = iterator1.next()
  let next2 = iterator2.next()
  while (!next1.done && !next2.done) {
    if (next1.value <= next2.value) {
      res.push(next1.value)
      next1 = iterator1.next()
    } else {
      res.push(next2.value)
      next2 = iterator2.next()
    }
  }
  while (!next1.done) {
    res.push(next1.value)
    next1 = iterator1.next()
  }
  while (!next2.done) {
    res.push(next2.value)
    next2 = iterator2.next()
  }
  return res
};
function* dfs(node: TreeNode | null): any {
  if (!node) return
  node.left && (yield* dfs(node.left))
  yield node.val
  node.right && (yield* dfs(node.right))
}

// @lc code=end

getAllElements(TreeNode.create([1, null, 8]), TreeNode.create([8, 1]))