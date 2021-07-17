
//自己--简单的dp

function maxSubArray(nums: number[]): number {
  let sum = nums[0]
  const Len = nums.length
  let res = nums[0]
  for (let i = 1; i < Len; i++) {
    if (nums[i] + sum < nums[i]) {
      sum = nums[i]
    } else {
      sum += nums[i]
    }
    res = Math.max(res, sum)
  }
  return res
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])