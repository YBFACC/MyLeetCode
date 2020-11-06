import { TreeNode, ListNode, runScript } from 'leetcode-class';

//自己--层序遍历模版题

function findNearestRightNode(root: TreeNode, u: TreeNode): TreeNode | null {
  let res: TreeNode | null = null
  let bfs = [root]
  while (bfs.length > 0) {
    let size = bfs.length
    let temp = []
    let HasU = false
    while (size > 0) {
      let curr = bfs.shift() as TreeNode
      if (curr.left) {
        temp.push(curr.left)
        HasU = curr.left.val === u.val ? true : HasU
      }
      if (curr.right) {
        temp.push(curr.right)
        HasU = curr.right.val === u.val ? true : HasU
      }
      size--
    }
    if (HasU) {
      while (temp.length > 0) {
        const curr = temp.shift() as TreeNode
        if (curr.val === u.val && temp.length >= 1) {
          res = temp[0]
          break
        }
      }
    }
    bfs = temp
  }
  return res
};

findNearestRightNode(TreeNode.create([]), TreeNode.create([]))