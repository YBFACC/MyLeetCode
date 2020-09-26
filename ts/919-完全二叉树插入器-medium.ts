/*
 * @lc app=leetcode.cn id=919 lang=typescript
 *
 * [919] 完全二叉树插入器
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//参考--完全树的父子关系
class CBTInserter {
  list: TreeNode[]
  root: TreeNode | null
  constructor(root: TreeNode | null) {
    this.root = root
    const list = []
    const queue = [root]
    while (queue.length > 0) {
      const curr = queue.shift() as TreeNode
      curr?.left && queue.push(curr.left as TreeNode)
      curr?.right && queue.push(curr.right as TreeNode)
      list.push(curr)
    }
    this.list = list
  }

  insert(v: number): number {
    const list = this.list
    const Len = list.length + 1
    const target = new TreeNode(v)
    list.push(target)
    const fath_i = Math.floor(list.length / 2) - 1
    let isLeft = (Len % 2 === 0) ? true : false
    if (isLeft) {
      list[fath_i].left = target
    } else {
      list[fath_i].right = target
    }

    return list[fath_i].val
  }

  get_root(): TreeNode | null {
    return this.root
  }
}


var obj = new CBTInserter(TreeNode.create([1, 2, 3, 4]))

// @lc code=end

