/*
 * @lc app=leetcode.cn id=1109 lang=typescript
 *
 * [1109] 航班预订统计
 */
import { Heap } from "../moban/heap";
// @lc code=start
//自己--优先队列+能量走路

//answer第i项过期--代表的value
type heap_item = [number, number]
function corpFlightBookings(bookings: number[][], n: number): number[] {
  bookings.sort((a, b) => a[0] - b[0])
  const answer = []
  const Len = bookings.length
  let index = 0
  const heap = new Heap<heap_item>([], (a: heap_item, b: heap_item) => a[0] >= b[0])
  let sum = 0
  for (let i = 1; i <= n; i++) {

    while (!heap.isEmpty() && heap.topValue()[0] < i) {
      const temp = heap.extract() as heap_item
      sum -= temp[1]
    }
    for (; index < Len; index++) {
      const item = bookings[index]
      if (item[0] === i) {
        sum += item[2]
        heap.insert([item[1], item[2]])
      } else {
        break
      }
    }
    answer[i - 1] = sum
  }
  return answer
};
// @lc code=end

corpFlightBookings([[2, 2, 35], [1, 2, 10]], 2)