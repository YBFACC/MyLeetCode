/*
 * @lc app=leetcode.cn id=1365 lang=typescript
 *
 * [1365] 有多少小于当前数字的数字
 */
//自己--优先队列-NlogN
// @lc code=start
import { Heap } from "../moban/heap";
function smallerNumbersThanCurrent(nums: number[]): number[] {
  const heap = new Heap<number[]>([], (a: number[], b: number[]) => {
    return a[0] >= b[0]
  })
  const Len = nums.length
  //[val,index]
  for (let i = 0; i < Len; i++) {
    heap.insert([nums[i], i])
  }
  const res = []
  let last_count = -1
  let last_value = -1
  let temp = 0
  while (!heap.isEmpty()) {
    const [val, index] = heap.extract() as number[]
    if (val === last_value) {
      res[index] = last_count
      temp++
    } else {
      last_count += temp
      temp = 0
      res[index] = ++last_count
      last_value = val
    }
  }
  return res
};
// @lc code=end

smallerNumbersThanCurrent([5, 0, 10, 0, 10, 6])

smallerNumbersThanCurrent([6, 5, 4, 8])
smallerNumbersThanCurrent([8, 1, 2, 2, 3])
