/*
 * @lc app=leetcode.cn id=310 lang=typescript
 *
 * [310] 最小高度树
 */

// @lc code=start
//自己--从shift换成链表-依旧超时
function findMinHeightTrees(n: number, edges: number[][]): number[] {
  const list: number[][] = Array.from({ length: n }, () => [])
  const res: number[] = []
  let min = n + 1
  for (const edge of edges) {
    const [from, to] = edge
    list[from]?.push(to)
    list[to]?.push(from)
  }
  for (let i = 0; i < n; i++) {
    const queue = new linked()
    queue.insert(i)
    const set = new Set()
    let count = 0
    while (queue.length > 0) {
      let size = queue.length
      if (set.size === n) break
      count++
      while (size > 0) {
        size--
        const curr = queue.shift() as number
        if (set.has(curr)) continue
        set.add(curr)
        const temp = list[curr]
        for (let i = 0; i < temp.length; i++) {
          queue.insert(temp[i])
        }
      }
    }
    if (count === min) {
      res.push(i)
    }
    if (count < min) {
      res.length = 0
      res.push(i)
      min = count
    }
  }
  return res
};
class linked {
  tump: linkedNode
  tail: linkedNode
  cache_num: number
  set: Set<number>
  constructor() {
    this.tump = new linkedNode(NaN)
    this.tail = new linkedNode(NaN)
    this.tump.next = this.tail
    this.tail.pre = this.tump
    this.cache_num = 0
    this.set = new Set()
  }
  shift(): number {
    this.cache_num--
    const target = this.tump.next as linkedNode
    if (target.val === NaN) return NaN
    const next = target.next as linkedNode
    this.tump.next = next
    next.pre = this.tump
    return target.val
  }
  insert(val: number): void {
    if (this.set.has(val)) return
    this.set.add(val)
    this.cache_num++
    const target = new linkedNode(val)
    const pre = this.tail.pre as linkedNode
    const next = this.tail as linkedNode
    target.pre = pre
    pre.next = target

    target.next = next
    next.pre = target
  }
  get length(): number {
    return this.cache_num
  }
}
class linkedNode {
  val: number
  next: linkedNode | undefined
  pre: linkedNode | undefined
  constructor(val: number) {
    this.val = val
    this.next
    this.pre
  }
}
// @lc code=end

