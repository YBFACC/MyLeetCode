import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--层序遍历模版题

function isEvenOddTree(root: TreeNode | null): boolean {
  if (!root || !check(root.val)) return false
  let isOdd = true
  let bfs = [root]
  while (bfs.length > 0) {
    const temp = []
    while (bfs.length > 0) {
      let curr = bfs.shift() as TreeNode

      if (curr.left) {
        const node = helper(curr.left, isOdd, temp)
        if (!node) return false
        temp.push(node)
      }
      if (curr.right) {
        const node = helper(curr.right, isOdd, temp)
        if (!node) return false
        temp.push(node)
      }

    }
    isOdd = !isOdd
    bfs = temp
  }

  return true
};

function helper(curr: TreeNode, isOdd: boolean, temp: TreeNode[]): TreeNode | null {
  if (isOdd) {
    if (check(curr.val) === false) {
      if (temp.length === 0 || temp[temp.length - 1].val > curr.val) {
        return curr
      } else {
        return null
      }
    } else {
      return null
    }
  } else {
    if (check(curr.val) === true) {
      if (temp.length === 0 || temp[temp.length - 1].val < curr.val) {
        return curr
      } else {
        return null
      }
    } else {
      return null
    }
  }
}

//odd-true
//even-false
function check(num: number): boolean {
  return (num & 1) === 1
}

isEvenOddTree(TreeNode.create([11, 8, 6, 1, 3, 9, 11, 30, 20, 18, 16, 12, 10, 4, 2, 17]))