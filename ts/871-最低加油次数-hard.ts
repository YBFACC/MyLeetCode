/*
 * @lc app=leetcode.cn id=871 lang=typescript
 *
 * [871] 最低加油次数
 */
import { Heap } from "../moban/heap";
//提示--贪心+优先队列

//当前油可以到到最远距离，从堆中取出经过油最多油的站

// @lc code=start
function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {
  if (startFuel >= target) return 0
  const MaxHeap = new Heap<number[]>([], (a: number[], b: number[]) => {
    if (a[1] === b[1]) {
      a[0] <= b[1]
    }
    return a[1] <= b[1]
  })
  const Len = stations.length
  let res = 0
  let sum = startFuel
  for (let i = 0; i < Len; i++) {
    const [dist, oil] = stations[i]
    while (sum < dist) {
      res++
      if (MaxHeap.isEmpty()) {
        return -1
      }
      const max = MaxHeap.extract() as number[]
      sum += max[1]
    }
    MaxHeap.insert(stations[i])
  }

  while (sum < target) {
    res++
    if (MaxHeap.isEmpty()) {
      return -1
    }
    const max = MaxHeap.extract() as number[]
    sum += max[1]
  }
  return res
};
// @lc code=end

console.log(minRefuelStops(1000,
  299,
  [[13, 21], [26, 115], [100, 47], [225, 99], [299, 141], [444, 198],
  [608, 190], [636, 157], [647, 255], [841, 123]]))

console.log(minRefuelStops(100, 50, [[50, 50]]))

console.log(minRefuelStops(100, 1, [[10, 100]]))

console.log(minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]))