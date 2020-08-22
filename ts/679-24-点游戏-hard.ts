/*
 * @lc app=leetcode.cn id=679 lang=typescript
 *
 * [679] 24 点游戏
 */
// @lc code=start
//参考--回溯--各种情况枚举
function judgePoint24(nums: number[]): boolean {
  const Len = nums.length
  if (nums.length === 1) {
    return Math.abs(nums[0] - 24) < 0.00001
  }
  let isValid = false

  for (let i = 0; i < Len; i++) {
    for (let j = i + 1; j < Len; j++) {
      const copyNums = nums.slice()
      copyNums.splice(j, 1) // 先删除索引大的数字
      copyNums.splice(i, 1) // 这样才不会影响索引小的数字的位置

      let n1 = nums[i]
      let n2 = nums[j]

      isValid = isValid || judgePoint24(copyNums.concat(n1 + n2))

      isValid = isValid || judgePoint24(copyNums.concat(n1 * n2))

      isValid = isValid || judgePoint24(copyNums.concat(n2 - n1))

      isValid = isValid || judgePoint24(copyNums.concat(n1 - n2))

      isValid = n1 !== 0 && (isValid || judgePoint24(copyNums.concat(n1 / n2)))
      isValid = n2 !== 0 && (isValid || judgePoint24(copyNums.concat(n2 / n1)))
    }
  }
  return isValid
}
// @lc code=end

console.log(judgePoint24([1, 2, 1, 2]))
