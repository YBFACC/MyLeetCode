import { AVLTree, Heap, TreeNode, ListNode, RunScript } from 'lc-tool';

//自己--先找左边界，加入所有叶子节点，加入右边界

function boundaryOfBinaryTree(root: TreeNode | null): number[] {
  if (!root) return []
  const res: number[] = [root.val]
  let sign1 = false
  const dfs1 = function (node: TreeNode | null) {
    if (!node || sign1) return
    if (!node.left && !node.right) {
      sign1 = true
      return
    }
    res.push(node.val)
    dfs1(node.left)
    dfs1(node.right)
  }
  dfs1(root.left)

  const dfs2 = function (node: TreeNode | null) {
    if (!node) return
    if (!node.left && !node.right) {
      res.push(node.val)
    }
    dfs2(node.left)
    dfs2(node.right)
  }
  dfs2(root.left)
  dfs2(root.right)

  const temp: number[] = []
  let sign3 = false
  const dfs3 = function (node: TreeNode | null) {
    if (!node || sign3) return
    if (!node.left && !node.right) {
      sign3 = true
      return
    }
    temp.push(node.val)
    dfs3(node.right)
    dfs3(node.left)
  }
  dfs3(root.right)

  res.push(...temp.reverse())
  return res
};

//[1,2,4,7,8,9,10,6,3]
boundaryOfBinaryTree(TreeNode.create([1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10]))

boundaryOfBinaryTree(TreeNode.create([1, 2, 2, 3, 3, null, null, 4, 4]))