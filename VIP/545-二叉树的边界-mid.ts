import { AVLTree, Heap, TreeNode, ListNode, RunScript } from 'lc-tool';

//参考--先序遍历--抽象

function boundaryOfBinaryTree(root: TreeNode | null): number[] {
  if (!root) return []
  const res: number[] = []
  const dfs = function (node: TreeNode | null, leftBound: boolean, rightBound: boolean) {
    if (!node) return

    if (leftBound) {
      res.push(node.val)
    } else if (node.left == null && node.right == null) {
      res.push(node.val);
      return;
    }
    dfs(node.left, leftBound, !leftBound && rightBound && node.right == null)
    dfs(node.right, !rightBound && leftBound && node.left == null, rightBound)
    if (!leftBound && rightBound) {
      res.push(node.val)
    }
  }
  dfs(root, true, true)

  return res
};

//[1,2,4,7,8,9,10,6,3]
boundaryOfBinaryTree(TreeNode.create([1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10]))

boundaryOfBinaryTree(TreeNode.create([1, 2, 2, 3, 3, null, null, 4, 4]))