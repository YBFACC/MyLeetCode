/*
 * @lc app=leetcode.cn id=164 lang=typescript
 *
 * [164] 最大间距
 */

 //参考--基数排序

// @lc code=start
function maximumGap(nums: number[]): number {
  if (nums.length < 2) return 0
  const maxValue = Math.max(...nums)
  let currValue = 1
  while (maxValue > currValue) {
    const cnt: number[][] = Array.from({ length: 10 }, () => [])
    const temp = []
    for (const num of nums) {
      if (num < currValue) {
        temp.push(num)
        continue
      }
      const index = Math.floor(num / currValue) % 10
      cnt[index].push(num)
    }
    for (const list of cnt) {
      temp.push(...list)
    }
    nums = temp
    currValue *= 10
  }

  let res = 0
  for (let i = 1; i < nums.length; i++) {
    res = Math.max(res, nums[i] - nums[i - 1])
  }

  return res
};
// @lc code=end

maximumGap([1, 10000000])