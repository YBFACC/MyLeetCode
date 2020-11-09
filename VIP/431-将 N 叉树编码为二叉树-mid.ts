import { TreeNode, ListNode, runScript } from 'leetcode-class';

//参考--左子节点上挂children[0],他的兄弟节点挂在左子节点的右节点方向
//左孩子，左孩子的右方向挂兄弟
class Codec {
  constructor() { }

  // Encodes a tree to a binary tree.
  serialize(root: Node | null): TreeNode | null {
    if (!root) return null
    const floor = new TreeNode(root.val)
    const child_list: Node[] = root.children

    if (child_list.length > 0) {
      floor.left = this.serialize(child_list.shift() as Node)
      let curr = floor.left as TreeNode
      while (child_list.length > 0) {
        curr.right = this.serialize(child_list.shift() as Node) as TreeNode
        curr = curr.right
      }
    }
    return floor
  };

  // Decodes your encoded data to tree.
  deserialize(root: TreeNode | null): Node | null {
    if (!root) return null
    const floor = new Node(root.val)
    let curr = root.left

    while (curr) {
      floor.children.push(this.deserialize(curr) as Node)
      curr = curr.right
    }

    return floor
  };
}