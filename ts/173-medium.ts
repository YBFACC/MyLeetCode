/*
 * @lc app=leetcode.cn id=173 lang=typescript
 *
 * [173] 二叉搜索树迭代器
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
//参考自己--栈存储节点

// @lc code=start

class BSTIterator {
  curr: TreeNode | null
  stack: TreeNode[]
  constructor(root: TreeNode | null) {
    this.curr = root
    this.stack = []
  }

  next(): number {
    while (this.curr) {
      this.stack.push(this.curr)
      this.curr = this.curr.left
    }
    this.curr = this.stack.pop()
    const res = this.curr.val
    this.curr = this.curr.right
    return res
  }

  hasNext(): boolean {
    return this.curr !== null || this.stack.length > 0
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

