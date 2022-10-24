
/**
 * 参考＝＝寻找分割点
 * 其实已经想到了－－再多考虑一下
 * @param nums 
 * @returns 
 */
function partitionDisjoint(nums: number[]): number {
  const Len = nums.length
  const min = Array.from({ length: Len }, () => nums[Len - 1])
  for (let i = Len - 2; i >= 0; i--) min[i] = Math.min(min[i + 1], nums[i])

  let max = 0
  for (let i = 0; i < Len; i++) {
    max = Math.max(max, nums[i])
    if (max <= min[i + 1]) return i + 1
  }
  return -1
};


partitionDisjoint([5, 0, 3, 8, 6])
partitionDisjoint([1, 1, 1, 0, 6, 12])