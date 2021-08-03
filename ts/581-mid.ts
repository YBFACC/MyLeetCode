//自己--排序+双指针

function findUnsortedSubarray(nums: number[]): number {
  const temp = nums.slice()
  temp.sort((a, b) => a - b)
  const Len = nums.length
  let left = 0, right = Len - 1
  while (left < right) {
    if (nums[left] == temp[left]) {
      left++
    } else if (nums[right] === temp[right]) {
      right--
    } else {
      break
    }
  }
  return right === left ? 0 : right - left + 1
};

console.log(findUnsortedSubarray([1]))