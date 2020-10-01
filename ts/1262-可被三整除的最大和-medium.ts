/*
 * @lc app=leetcode.cn id=1262 lang=typescript
 *
 * [1262] 可被三整除的最大和
 */

// @lc code=start
//自己--先预处理都%3--再反向从总值中减去下标代表的值
function maxSumDivThree(nums: number[]): number {
  const list: number[] = []
  let all = 0
  let temp = 0
  for (const num of nums) {
    all += num
    temp += num % 3
    list.push(num % 3)
  }
  let res = 0
  const set = new Set()
  const dfs = function (_temp: number, _all: number) {
    if (_all <= res) return
    if (_temp % 3 === 0) {
      res = Math.max(res, _all)
      return
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i] === 0 || set.has(i)) continue
      set.add(i)
      dfs(_temp - list[i], _all - nums[i])
      set.delete(i)
    }
  }
  dfs(temp, all)

  return res
};
// @lc code=end

maxSumDivThree([1, 2, 3, 4, 4])

maxSumDivThree([3, 6, 5, 1, 8])