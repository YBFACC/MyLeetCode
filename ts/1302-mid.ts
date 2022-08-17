import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0
  let levelList: TreeNode[] = [];

  let bfs = [root]
  while (bfs.length > 0) {
    let size = bfs.length
    levelList = bfs.slice()
    while (size-- > 0) {
      let curr = bfs.shift() as TreeNode
      curr.left && bfs.push(curr.left)
      curr.right && bfs.push(curr.right)
    }
  }

  return levelList.reduce((acc, node) => acc + node.val, 0);
};