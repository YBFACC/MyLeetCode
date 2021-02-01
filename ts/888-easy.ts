/*
 * @lc app=leetcode.cn id=888 lang=typescript
 *
 * [888] 公平的糖果交换
 */

//自己--重做--easy

// @lc code=start
function fairCandySwap(A: number[], B: number[]): number[] {
  const sumA = A.reduce((pre, curr) => pre + curr, 0)
  const sumB = B.reduce((pre, curr) => pre + curr, 0)
  const set = new Set(B)

  for (const a of A) {
    const temp = a + (sumB - sumA) / 2
    if (set.has(temp)) {
      return [a, temp]
    }
  }
  return []
};
// @lc code=end

console.log(fairCandySwap([1, 2, 5], [2, 4]))