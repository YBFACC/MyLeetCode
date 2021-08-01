import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--模拟硬做

function verticalTraversal(root: TreeNode | null): number[][] {
  const res: number[][] = []
  const map: Map<number, Map<number, number[]>> = new Map()

  const dfs = function (node: TreeNode | null, x: number, y: number) {
    if (!node) return
    if (!map.has(y)) map.set(y, new Map())
    if (!map.get(y)!.has(x)) {
      map.get(y)!.set(x, [])
    }
    map.get(y)!.get(x)!.push(node.val)
    dfs(node.left, x + 1, y - 1)
    dfs(node.right, x + 1, y + 1)
  }
  dfs(root, 0, 0)

  const list_y = [...map.keys()]
  list_y.sort((a, b) => a - b)
  for (const y of list_y) {
    const temp = map.get(y) as Map<number, number[]>
    const list_x = [...temp.keys()]
    list_x.sort((a, b) => a - b)
    const list = []
    for (const x of list_x) {
      const y_x = temp.get(x) as number[]
      y_x.sort((a, b) => a - b)
      list.push(...y_x)
    }
    res.push(list)
  }

  return res
};

verticalTraversal(TreeNode.create([0, 8, 1, null, null, 3, 2, null, 4, 5, null, null, 7, 6]))