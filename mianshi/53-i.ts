
//参考--二分左右边界

function search(nums: number[], target: number): number {
  if (nums.length === 0) return 0
  const left = _left(nums, target), right = _right(nums, target)
  if (nums[left] !== target || nums[right] !== target) return 0
  return right - left + 1
};

//左边界
function _left(nums: number[], target: number): number {
  const Len = nums.length
  let left = 0, right = Len - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return right
}

//右边界
function _right(nums: number[], target: number): number {
  const Len = nums.length
  let left = 0, right = Len - 1
  while (left < right) {
    const mid = left + ((right - left + 1) >> 1)
    if (nums[mid] <= target) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return right
}

console.log(search([5, 7, 7, 8, 8, 10], 8))