
//重做--参考--双指针

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0
  let left = 2, right = 2
  const Len = nums.length
  while (right < Len) {
    if (nums[left - 2] !== nums[right]) {
      nums[left] = nums[right]
      left++
    }
    right++
  }
  return left
};