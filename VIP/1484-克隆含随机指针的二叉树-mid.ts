import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//提示--先完成树，再将random指针指向对应节点

class NodeCopy {
  val: number
  left: Node | null
  right: Node | null
  random: Node | null
  constructor(val?: number, left?: Node | null, right?: Node | null, random?: Node | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.random = (random === undefined ? null : random)
  }
}

function copyRandomBinaryTree(root: Node | null): NodeCopy | null {
  if (!root) return null
  const map = new Map()
  const dfs = function (node: Node | null): NodeCopy | null {
    if (!node) return null
    const floor = new NodeCopy(node.val)
    map.set(node, floor)
    floor.left = dfs(node.left)
    floor.right = dfs(node.right)
    return floor
  }
  const copy = dfs(root) as NodeCopy

  const helper = function (node: Node | null): void {
    if (!node) return
    if (node.random) {
      const r1 = map.get(node.random)
      const n1 = map.get(node)
      n1.random = r1
    }
    helper(node.left)
    helper(node.right)
  }
  helper(root)

  return copy
};