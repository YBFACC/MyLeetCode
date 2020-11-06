import { TreeNode, ListNode, runScript } from 'leetcode-class';

//自己--后序遍历--节点数*平均值=总和

function maximumAverageSubtree(root: TreeNode | null): number {
  let max = 0
  //[节点数，平均值]
  const dfs = function (node: TreeNode | null): number[] {
    if (!node) return [0, 0]
    let [left_num, left_val] = dfs(node.left)
    let [right_num, right_val] = dfs(node.right)

    let left = left_num * left_val
    let right = right_num * right_val
    const all_num = left_num + right_num + 1
    let floor = (left + right + node.val) / all_num
    max = Math.max(max, floor)
    return [all_num, floor]
  }
  dfs(root)
  return max
};