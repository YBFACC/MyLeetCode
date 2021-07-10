/*
 * @lc app=leetcode.cn id=981 lang=typescript
 *
 * [981] 基于时间的键值存储
 */

//提示--二分
//timestamps 都是严格递增的,大时间一定在最后

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start
class TimeMap {
  map: Map<string, [string, number][]>
  constructor() {
    this.map = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    const map = this.map
    if (!map.has(key)) {
      map.set(key, [])
    }
    map.get(key)!.push([value, timestamp])
  }

  get(key: string, timestamp: number): string {
    const map = this.map
    const list = map.get(key)
    if (!list) return ''
    let left = 0, right = list.length - 1, res = ''
    while (left <= right) {
      const mid = left + ((right - left) >> 1)
      if (list[mid][1] <= timestamp) {
        left = mid + 1
        res = list[mid][0]
      } else {
        right = mid - 1
      }
    }
    return res
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

RunScript(["TimeMap", "set", "get", "get", "set", "get", "get"]
  , [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]], TimeMap)