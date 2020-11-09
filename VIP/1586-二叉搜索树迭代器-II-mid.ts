import { TreeNode, ListNode, runScript } from 'leetcode-class';

//自己--先处理变成list
//generator？双向链表

class BSTIterator {
  list: number[]
  index: number
  constructor(root: TreeNode | null) {
    this.index = -1
    const temp: number[] = []
    const dfs = function (node: TreeNode | null) {
      if (!node) return
      dfs(node.left)
      temp.push(node.val)
      dfs(node.right)
    }
    dfs(root)
    this.list = temp
  }

  hasNext(): boolean {
    const index = this.index
    const list = this.list
    if (index >= -1 && index < list.length - 1) {
      return true
    }
    return false
  }

  next(): number {
    const list = this.list
    return list[++this.index]
  }

  hasPrev(): boolean {
    const index = this.index
    const list = this.list
    if (index > 0 && index < list.length) {
      return true
    }
    return false
  }

  prev(): number {
    const list = this.list
    return list[--this.index]
  }
}