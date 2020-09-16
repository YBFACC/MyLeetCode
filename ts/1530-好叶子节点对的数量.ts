import { TreeNode, ListNode, runScript } from 'leetcode-class';
//自己--后序+冒泡比较
function countPairs(root: TreeNode | null, distance: number): number {
  if (!root) return 0
  let res = 0
  const dfs = function (node: TreeNode | null): number[] {
    if (!node) return []
    if (!node.left && !node.right) {
      return [0]
    }
    let left = dfs(node.left)
    let right = dfs(node.right)
    for (let i = 0; i < left.length; i++) {
      for (let j = 0; j < right.length; j++) {
        if (left[i] + right[j] + 2 <= distance) {
          res++
        }
      }
    }

    const temp = []

    for (let i = 0; i < left.length; i++) {
      if (left[i] + 1 < distance) {
        temp.push(left[i] + 1)
      }
    }
    for (let j = 0; j < right.length; j++) {
      if (right[j] + 1 < distance) {
        temp.push(right[j] + 1)
      }
    }
    return temp
  }
  dfs(root)
  return res
};

console.log(countPairs(TreeNode.create([1, 2, 3, 4, 5, 6, 7]), 3))