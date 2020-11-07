import { TreeNode, ListNode, runScript } from 'leetcode-class';

//自己--DFS模版题

function isValidSequence(root: TreeNode | null, arr: number[]): boolean {

  let res = false
  const Len = arr.length

  const dfs = function (node: TreeNode | null, index: number) {
    if (!node) return
    if (!node.left && !node.right && index === Len - 1 && node.val === arr[index]) {
      res = true
      return
    }
    if (node.val === arr[index]) {
      index++
    } else {
      return
    }
    dfs(node.left, index)
    dfs(node.right, index)
  }
  dfs(root, 0)

  return res
};

isValidSequence(TreeNode.create([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]), [0, 0, 1])