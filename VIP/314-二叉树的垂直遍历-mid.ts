import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//参考--层序
//上层节点在上方

type item = [number, TreeNode]
interface obj {
  [index: string]: number[]
}
function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const map: obj = {}
  let bfs = [[0, root]]
  while (bfs.length > 0) {
    let size = bfs.length
    while (size > 0) {
      let [val, node] = bfs.shift() as item
      if (!map[val]) map[val] = []
      map[val].push(node.val)
      if (node.left) {
        bfs.push([val - 1, node.left])
      }
      if (node.right) {
        bfs.push([val + 1, node.right])
      }
      size--
    }
  }
  const list: number[][] = []
  let keys = Object.keys(map)
  keys.sort((a, b) => +a - +b)
  for (const key of keys) {
    list.push(map[key])
  }
  return list
};

verticalOrder(TreeNode.create(
  [3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5]))