//参考--众数使用摩尔投票法

function majorityElement(nums: number[]): number {
  let count = 1, point = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (point === nums[i]) {
      count++
    } else {
      count--
    }
    if (count < 0) {
      count = 0
      point = nums[i]
    }
  }

  let _count = 0
  for (const item of nums) {
    if (item === point) {
      _count++
    }
  }
  return _count * 2 > nums.length ? point : -1
};

console.log(majorityElement([2,2,1,1,1,2,2]))