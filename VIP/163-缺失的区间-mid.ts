//参考--没啥技巧

function findMissingRanges(nums: number[], lower: number, upper: number): string[] {
  const s_lower = lower + ''
  const s_upper = upper + ''
  const Len = nums.length
  if (nums.length === 0) return [lower === upper ? s_lower : s_lower + '->' + s_upper]
  const res = []
  const start = nums[0] - lower
  if (start > 0) {
    res.push(start === 1 ? s_lower : s_lower + '->' + (nums[0] - 1))
  }
  for (let i = 1; i < Len; i++) {
    const temp = nums[i] - nums[i - 1]
    const s = (nums[i - 1] + 1) + ''
    const e = (nums[i] - 1) + ''
    if (temp > 1) {
      res.push((temp > 2 ? s + '->' : '') + e)
    }
  }
  const end = upper - nums[nums.length - 1]
  if (end > 0) {
    res.push(end === 1 ? s_upper : (nums[nums.length - 1] + 1) + '->' + s_upper)
  }
  return res
};

findMissingRanges([2]
  , 0
  , 9)

findMissingRanges([0, 1, 3, 50, 75], 0, 99)