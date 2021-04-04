/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

//看自己以前的代码--排列组合
//后加入元素与已有的内容各项结合

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  if (nums.length === 0) return [[]]
  //去重准备
  nums.sort((a, b) => a - b)
  const res: number[][] = [[]]
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    const floor = nums[i]
    const Len = res.length
    for (let j = 0; j < Len; j++) {
      //去重精髓
      if (i > 0 && j < index && nums[i - 1] === nums[i]) {
        continue
      }
      const temp = res[j].slice()
      temp.push(floor)
      res.push(temp)
    }
    index = Len
  }
  return res
};
// @lc code=end

subsetsWithDup([0])