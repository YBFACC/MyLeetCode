/**
 * 提示－－前缀和
 * 找规律
 * @param nums 
 * @returns 
 */
function getSumAbsoluteDifferences(nums: number[]): number[] {
  const prefix = [0]
  nums.forEach(nums => {
    prefix.push(nums + prefix[prefix.length - 1])
  })

  const res: number[] = [], Len = nums.length
  for (let i = 0; i < Len; i++) {
    const low = nums[i] * i - prefix[i]
    const high = prefix[Len] - prefix[i] - nums[i] * (Len - i)
    res.push(low + high)
  }

  return res
};

getSumAbsoluteDifferences([1, 4, 6, 8, 10])