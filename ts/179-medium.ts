/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 */

//自己--A+B、B+A

// @lc code=start
function largestNumber(nums: number[]): string {
  if (nums.length === 0) return ''
  let sum = 0
  nums.forEach((v) => sum += v)
  if (sum === 0) return '0'
  const map: string[] = nums.map((v) => v + '')
  map.sort((a, b) => {
    return helper(a, b)
  })

  return map.join('')
};
function helper(a: string, b: string): number {
  const _a = a + b, _b = b + a
  for (let i = 0; i < _a.length; i++) {
    if (_a[i] > _b[i]) {
      return -1
    }
    if (_a[i] < _b[i]) {
      return 1
    }
  }
  return -1
}
// @lc code=end

console.log(largestNumber([0, 0]))

largestNumber([3, 30, 34, 5, 9])

largestNumber([432, 43243])