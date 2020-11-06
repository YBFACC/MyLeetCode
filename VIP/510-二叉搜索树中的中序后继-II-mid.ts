class Node {
  val: number
  left: Node | null
  right: Node | null
  parent: Node | null
  constructor(val?: number, left?: Node | null, right?: Node | null, parent?: Node | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.parent = (parent === undefined ? null : parent)
  }
}

//提示--先找到根节点--中序遍历

function inorderSuccessor(node: Node | null): Node | null {
  if (!node) return null
  let max: Node | null = null

  let root = node
  while (root.parent) {
    root = root.parent
  }
  const dfs = function (Node: Node | null) {
    if (!Node) return
    dfs(Node.left)
    if (Node.val > node.val) {
      if(!max||max.val>Node.val){
        max=Node
      }
    }
    dfs(Node.right)
  }
  dfs(root)

  return max
};