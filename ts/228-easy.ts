
//自己--重做--easy

function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return []
  let start = 0
  let end = 0
  const res: string[] = []
  const Len = nums.length

  for (let i = 1; i < Len; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      res.push(
        end - start > 0 ? (nums[start] + '->' + nums[end]) : (nums[start] + '')
      )
      start = i
    }
    end = i
  }
  if (start !== Len) {
    res.push(
      end - start > 0 ? (nums[start] + '->' + nums[end]) : (nums[start] + '')
    )
  }
  return res
};

summaryRanges([0])