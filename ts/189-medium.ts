/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
//自己--重做--循环k遍

// function rotate(nums: number[], k: number): void {
//   const Len = nums.length
//   while (k-- > 0) {
//     const temp = nums[Len - 1]
//     for (let i = Len - 1; i > 0; i--) {
//       nums[i] = nums[i - 1]
//     }
//     nums[0] = temp
//   }
//   return
// };
// @lc code=end


//更好的环状替换-O(n)
const gcd = (x: number, y: number): number => (y ? gcd(y, x % y) : x)
function rotate(nums: number[], k: number): void {
  const Len = nums.length
  k %= Len
  let count = gcd(k, Len)
  for (let start = 0; start < count; start++) {
    let curr = start
    let prev = nums[start]
    do {
      const next = (curr + k) % Len
      const temp = nums[next]
      nums[next] = prev
      prev = temp
      curr = next
    } while (curr !== start)
  }
  return
};

rotate([1, 2, 3, 4, 5, 6, 7], 3)