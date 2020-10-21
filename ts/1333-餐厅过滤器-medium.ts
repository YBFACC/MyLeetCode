/*
 * @lc app=leetcode.cn id=1333 lang=typescript
 *
 * [1333] 餐厅过滤器
 */
//自己--优先队列
// @lc code=start
import { Heap } from "../moban/heap";
function filterRestaurants(restaurants: number[][], veganFriendly: number, maxPrice: number, maxDistance: number): number[] {
  const heap = new Heap<number[]>([], (a: number[], b: number[]) => {
    if (a[1] === b[1]) {
      return a[0] <= b[0]
    }
    return a[1] <= b[1]
  })
  for (const [id, rating, vegan, price, distance] of restaurants) {
    if (veganFriendly === 1 && vegan !== 1) continue
    if (price <= maxPrice &&
      distance <= maxDistance)
      heap.insert([id, rating])
  }
  const res = []
  while (!heap.isEmpty()) {
    const curr = heap.extract() as number[]
    res.push(curr[0])
  }
  return res
};
// @lc code=end
//[4,3,2,1,5]
filterRestaurants([[1, 4, 1, 40, 10], [2, 8, 0, 50, 5], [3, 8, 1, 30, 4], [4, 10, 0, 10, 3], [5, 1, 1, 15, 1]]
  , 0
  , 50
  , 10
)

filterRestaurants([[1, 4, 1, 40, 10], [2, 8, 0, 50, 5], [3, 8, 1, 30, 4], [4, 10, 0, 10, 3], [5, 1, 1, 15, 1]],
  1, 50, 10
)