import { TreeNode, ListNode, runScript } from 'leetcode-class';

//参考--队列--简洁
class HitCounter {
  list: number[] = []
  constructor() { }

  hit(timestamp: number): void {
    this.list.push(timestamp)
  }

  getHits(timestamp: number): number {
    const key = timestamp - 300
    const list = this.list
    while (list.length > 0 && list[0] <= key) {
      list.shift()
    }
    return this.list.length
  }
}

console.log(runScript(["HitCounter", "hit", "hit", "hit", "getHits", "hit", "getHits", "getHits"]
  , [[], [1], [2], [3], [4], [300], [300], [301]]
  , [HitCounter]))