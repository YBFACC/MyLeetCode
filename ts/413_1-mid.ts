//参考--等差数列
//上一轮的值保留+这轮刚形成的一个
//eg.[1,2,3,4]
//第一轮：1，2，3
//第二轮：1，2，3=>1，2，3，4       2，3，4

function numberOfArithmeticSlices(nums: number[]): number {
  if (nums.length <= 1) return 0
  let res = 0, d = nums[0] - nums[1], t = 0
  const Len = nums.length
  for (let i = 2; i < Len; i++) {
    if (nums[i - 1] - nums[i] === d) {
      t++
    } else {
      t = 0
      d = nums[i - 1] - nums[i]
    }
    res += t
  }
  return res
};