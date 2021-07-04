/*
 * @lc app=leetcode.cn id=645 lang=typescript
 *
 * [645] 错误的集合
 */

//自己--hash表统计
//官解的lowbit思路不错

// @lc code=start
function findErrorNums(nums: number[]): number[] {
  const map = new Map()
  const res = []
  for (const item of nums) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      res[1] = i
      continue
    }
    else if (map.get(i) === 2) {
      res[0] = i
    }
  }
  return res
};
// @lc code=end

findErrorNums([1, 2, 2, 4])