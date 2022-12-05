import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';


/**
 * 参考－－双Map 模拟流程
 */
class FreqStack {
  map: Map<number, Array<number>> = new Map<number, Array<number>>()
  cnst: Map<number, number> = new Map<number, number>()
  max: number = 0
  push(val: number): void {
    const cnst = this.cnst, map = this.map
    if (!cnst.has(val)) {
      cnst.set(val, 0)
    }
    const lastCount = cnst.get(val) as number
    cnst.set(val, 1 + lastCount)
    const c = cnst.get(val) as number
    if (!map.has(c)) {
      map.set(c, [])
    }
    map.get(c)?.push(val)
    this.max = Math.max(this.max, c)
  }
  pop(): number {
    const cnst = this.cnst, map = this.map, max = this.max
    const ans = map.get(max)?.pop() as number
    if (map.get(max)?.length === 0) {
      this.max--
    }
    const count = cnst.get(ans) as number
    cnst.set(ans, count - 1)
    return ans
  }
}
