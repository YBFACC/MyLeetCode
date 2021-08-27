//自己--2个优先队列

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

class MedianFinder {
  min: Heap<number>
  max: Heap<number>
  constructor() {
    //存贮较大的一半
    this.min = new Heap()
    //存贮较小的一半
    this.max = new Heap([], (a: number, b: number) => a <= b)
  }

  addNum(num: number): void {
    const max = this.max, min = this.min
    min.offer(num)
    if (min.size >= max.size + 1) {
      max.offer(min.poll())
    }
    if (max.size > 0 && max.peek() > min.peek()) {
      min.offer(max.poll())
      max.offer(min.poll())
    }
  }

  findMedian(): number {
    const max = this.max, min = this.min
    if (max.size === min.size) {
      return (max.peek() + min.peek()) / 2
    } else {
      return max.peek()
    }
  }
}