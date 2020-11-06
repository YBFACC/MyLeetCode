class Node {
  val: number
  children: Node[]
  constructor(val?: number, children?: Node[]) {
    this.val = (val === undefined ? 0 : val)
    this.children = (children === undefined ? [] : children)
  }
}

//自己--递归-easy
//图--加个map--防止递归循环

function cloneTree(root: Node | null): Node | null {
  if (!root) return null
  const target = new Node(root.val)
  for (const child of root.children) {
    target.children.push(cloneTree(child) as Node)
  }
  return target
};