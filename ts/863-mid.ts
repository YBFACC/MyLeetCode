import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//参考以前自己代码
// 1.对目标节点以下对节点=>简单的DFS就可以（类似根节点距离为k的子节点）
// 2.对目标节点的路径上的父节点=>走路径以外的子节点，数组的长度代表父节点到目标节点的长度

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  const res = []
  const down = function (node: TreeNode | null, depth: number) {
    if (!node) return
    if (depth === k) {
      res.push(node.val)
      return
    }
    down(node.left, depth + 1)
    down(node.right, depth + 1)
  }
  down(target, 0)

  let parents = []
  const dfs = function (node: TreeNode | null, path: TreeNode[]) {
    if (!node || parents.length > 0) return
    if (node === target) {
      parents = path.slice()
      return
    }
    path.push(node)
    dfs(node.left, path)
    dfs(node.right, path)
    path.pop()
  }
  dfs(root, [])

  while (parents.length > 0) {
    let curr = parents.shift()
    let _index = parents.length + 1
    if (_index === k) {
      res.push(curr.val)
    }
    const temp = parents.length > 0 ? parents[0] : target

    curr.left && curr.left.val === temp.val && down(curr.right, _index + 1)
    curr.right && curr.right.val === temp.val && down(curr.left, _index + 1)
  }

  return res
};

