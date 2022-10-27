import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

interface TimeNode extends TreeNode {
  father?: TreeNode | null
}

/**
 * 自己－－添加父节点指向
 * @param root 
 * @param start 
 * @returns 
 */
function amountOfTime(root: TreeNode | null, start: number): number {
  let startNode!: TimeNode
  const before = function (node: TimeNode | null, father: TimeNode | null) {
    if (!node) return
    if (node.val === start) startNode = node
    node.father = father
    before(node.left, node)
    before(node.right, node)
  }
  before(root, null)

  let bfsList = [startNode]
  let res = 0
  //每个数都不同，方便去重
  const set: Set<number> = new Set([start])
  while (bfsList.length > 0) {
    const temp: TimeNode[] = []
    while (bfsList.length > 0) {
      const currNode = bfsList.pop() as TimeNode
      const fatherNode = currNode.father, leftChild = currNode.left, rightChild = currNode.right
      if (fatherNode && !set.has(fatherNode.val)) {
        temp.push(fatherNode)
        set.add(fatherNode.val)
      }
      if (leftChild && !set.has(leftChild.val)) {
        temp.push(leftChild)
        set.add(leftChild.val)
      }
      if (rightChild && !set.has(rightChild.val)) {
        temp.push(rightChild)
        set.add(rightChild.val)
      }
    }
    temp.length > 0 && res++
    bfsList = temp
  }
  return res
};

amountOfTime(TreeNode.create([1]), 1)
amountOfTime(TreeNode.create([1, 5, 3, null, 4, 10, 6, 9, 2]), 3)