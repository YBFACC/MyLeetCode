/*
 * @lc app=leetcode.cn id=462 lang=typescript
 *
 * [462] 最少移动次数使数组元素相等 II
 */
// @lc code=start
//自己--错误--体会到使用到中位数，为什么正确
//每次取最小值加1，每次取最大值减1，趋近于中间值。
//但是这样中间值，左右离中间值的距离不同，得到错误答案
//小的值有10项，大的项有1项--中间数肯定偏向小的一边
// function minMoves2(nums: number[]): number {
//   if (nums.length === 0) return 0
//   let res = 0
//   const MaxHeap = new Heap<number>(nums, (a: number, b: number) => a <= b)
//   const MinHeap = new Heap<number>(nums, (a: number, b: number) => a >= b)
//   let no_End = true
//   while (no_End) {
//     no_End = false
//     const average = (MaxHeap.topValue() + MinHeap.topValue()) >> 1
//     if (MaxHeap.topValue() !== average) {
//       const temp = MaxHeap.extract() as number
//       MaxHeap.insert(temp - 1)
//       res++
//       no_End = true
//     }
//     if (MinHeap.topValue() !== average) {
//       const temp = MinHeap.extract() as number
//       MinHeap.insert(temp + 1)
//       res++
//       no_End = true
//     }
//   }
//   return res
// };

function minMoves2(nums: number[]): number {
  let result = 0
  nums = nums.sort((a, b) => {
    return a - b
  })
  let avg = nums[Math.ceil(nums.length / 2) - 1]
  nums.forEach(num => {
    result += Math.abs(avg - num)
  })
  return result
};

// @lc code=end
//14
minMoves2([1, 0, 0, 8, 6])
//2
minMoves2([1, 2, 3])