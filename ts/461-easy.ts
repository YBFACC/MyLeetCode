/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 */

//自己--逐位比较
//Brian Kernighan优化

// @lc code=start
function hammingDistance(x: number, y: number): number {
  const x_list: number[] = Array.from({ length: 32 }, () => 0)
  const y_list: number[] = Array.from({ length: 32 }, () => 0)
  let count = 0
  helper(x, x_list)
  helper(y, y_list)
  for (let i = 0; i < 32; i++) {
    if (x_list[i] !== y_list[i]) count++
  }
  return count
};

function helper(num: number, list: number[]): void {
  let index = 31
  while (num > 0) {
    if ((num & 1) === 1) list[index] = 1
    num >>>= 1
    index--
  }
}
// @lc code=end

hammingDistance(2, 4)
