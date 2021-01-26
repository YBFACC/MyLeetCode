/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 */

//自己--贪心--优先队列

// @lc code=start
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
function candy(ratings: number[]): number {
  const Len = ratings.length
  const heap = new Heap<number[]>([], (a: number[], b: number[]) => {
    return a[0] >= b[0]
  })
  //[val,index]
  for (let i = 0; i < Len; i++) {
    heap.insert([ratings[i], i])
  }
  const res: number[] = []

  while (!heap.isEmpty()) {
    const [val, index] = heap.extract() as number[]
    let floor = 1

    if (res[index - 1] > 0 && ratings[index] > ratings[index - 1]) {
      floor = Math.max(floor, res[index - 1] + 1)
    }
    if (res[index + 1] > 0 && ratings[index] > ratings[index + 1]) {
      floor = Math.max(floor, res[index + 1] + 1)
    }

    res[index] = floor
  }

  return res.reduce((pre, curr) => pre + curr, 0)
};
// @lc code=end

console.log(candy([1, 2, 2]))

//208
console.log(candy(
  [58, 21, 72, 77, 48, 9, 38, 71, 68, 77, 82, 47, 25, 94, 89, 54, 26, 54, 54, 99, 64, 71, 76, 63, 81, 82, 60, 64, 29, 51, 87, 87, 72, 12, 16, 20, 21, 54, 43, 41, 83, 77, 41, 61, 72, 82, 15, 50, 36, 69, 49, 53, 92, 77, 16, 73, 12, 28, 37, 41, 79, 25, 80, 3, 37, 48, 23, 10, 55, 19, 51, 38, 96, 92, 99, 68, 75, 14, 18, 63, 35, 19, 68, 28, 49, 36, 53, 61, 64, 91, 2, 43, 68, 34, 46, 57, 82, 22, 67, 89]
))
